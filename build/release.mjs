// Release files, signing keys and Linux repository descriptors. No dependencies: Node >= 18.
// Used by build.mjs (verify and place the release files) and pin-release.mjs (write the release block).

import { createHash, createPublicKey, verify } from "node:crypto";

// Every file a release may carry, by kind. The names are fixed by the app's release job
// (dentalcraft-app packaging/README.md); V is the version without the leading "v".
export const releaseFiles = (v) => ({
  linux: `dentalcraft_${v}_linux_x86_64.tar.gz`,
  windows: `dentalcraft_${v}_windows_x86_64.zip`,
  appimage: `DentalCraft-${v}-x86_64.AppImage`,
  deb: `dentalcraft_${v}_amd64.deb`,
  rpm: `dentalcraft-${v}-1.x86_64.rpm`,
  flatpak: `DentalCraft-${v}.flatpak`,
  exe: `DentalCraft-${v}-setup.exe`,
  msi: `DentalCraft-${v}-x86_64.msi`,
  update: "update.json",
  updateSig: "update.json.minisig",
});

// Kinds served from /download/. The .deb and .rpm are also the package files of the APT and
// RPM repositories (nginx maps the repository paths onto /download/, one copy). The Flatpak
// bundle is not served: it only feeds the OSTree repository. The update manifest is served
// as /update/stable.json.
export const SERVED = new Set(["linux", "windows", "appimage", "deb", "rpm", "exe", "msi"]);

// ---------- OpenPGP public key (armored) ----------

export function dearmor(armored) {
  const lines = armored.replace(/\r/g, "").split("\n");
  const start = lines.findIndex((l) => l.startsWith("-----BEGIN PGP PUBLIC KEY BLOCK-----"));
  const end = lines.findIndex((l) => l.startsWith("-----END PGP PUBLIC KEY BLOCK-----"));
  if (start < 0 || end < start) throw new Error("not an armored OpenPGP public key");
  let i = start + 1;
  while (i < end && lines[i].trim() !== "") i++; // armor headers end at the first blank line
  const body = lines.slice(i + 1, end).filter((l) => l && !l.startsWith("="));
  return Buffer.from(body.join(""), "base64");
}

// v4 fingerprint of the first (primary) key packet: SHA-1 over 0x99, 2-byte length, packet body.
export function gpgFingerprint(binary) {
  const ctb = binary[0];
  if (!(ctb & 0x80)) throw new Error("OpenPGP: bad packet header");
  let tag, len, off;
  if (ctb & 0x40) {
    tag = ctb & 0x3f;
    const o = binary[1];
    if (o < 192) { len = o; off = 2; }
    else if (o < 224) { len = ((o - 192) << 8) + binary[2] + 192; off = 3; }
    else if (o === 255) { len = binary.readUInt32BE(2); off = 6; }
    else throw new Error("OpenPGP: partial length in a key packet");
  } else {
    tag = (ctb >> 2) & 0x0f;
    const lt = ctb & 3;
    if (lt === 0) { len = binary[1]; off = 2; }
    else if (lt === 1) { len = binary.readUInt16BE(1); off = 3; }
    else if (lt === 2) { len = binary.readUInt32BE(1); off = 5; }
    else throw new Error("OpenPGP: indeterminate length");
  }
  if (tag !== 6) throw new Error("OpenPGP: the first packet is not a public key");
  const body = binary.subarray(off, off + len);
  if (body[0] !== 4) throw new Error("OpenPGP: only v4 keys are supported");
  const head = Buffer.from([0x99, len >> 8, len & 0xff]);
  return createHash("sha1").update(head).update(body).digest("hex").toUpperCase();
}

// ---------- minisign ----------

const b64lines = (text) => text.replace(/\r/g, "").split("\n").filter((l) => l.trim() !== "");

// Verifies a minisign signature (prehashed "ED" or legacy "Ed") and its trusted comment.
// Returns the trusted comment; throws on any mismatch.
export function minisignVerify(pubText, data, sigText) {
  const pub = Buffer.from(b64lines(pubText)[1] || "", "base64");
  if (pub.length !== 42 || pub.subarray(0, 2).toString() !== "Ed") throw new Error("minisign: bad public key");
  const lines = b64lines(sigText);
  if (lines.length < 4 || !lines[2].startsWith("trusted comment: ")) throw new Error("minisign: bad signature file");
  const sig = Buffer.from(lines[1], "base64");
  const alg = sig.subarray(0, 2).toString();
  if (sig.length !== 74 || (alg !== "ED" && alg !== "Ed")) throw new Error("minisign: bad signature");
  if (!sig.subarray(2, 10).equals(pub.subarray(2, 10))) throw new Error("minisign: signed with another key");
  const key = createPublicKey({ key: { kty: "OKP", crv: "Ed25519", x: pub.subarray(10).toString("base64url") }, format: "jwk" });
  const msg = alg === "ED" ? createHash("blake2b512").update(data).digest() : data;
  const sigBytes = sig.subarray(10);
  if (!verify(null, msg, key, sigBytes)) throw new Error("minisign: signature does not match the file");
  const comment = lines[2].slice("trusted comment: ".length);
  const global = Buffer.from(lines[3], "base64");
  if (!verify(null, Buffer.concat([sigBytes, Buffer.from(comment)]), key, global)) {
    throw new Error("minisign: trusted comment signature does not match");
  }
  return comment;
}

// linux/dentalcraft.list and linux/dentalcraft.repo (in this repo) are the single source: the deb and rpm
// ship byte-identical copies (dentalcraft-app packaging/linux/, checked by the app release job), so
// installing the package over this one-time setup never prompts about a changed configuration file.
// They name https://dentalcraft.app; a build for another SITE_URL rewrites that prefix.
// The deb also ships the binary keyring served here as dentalcraft.gpg (/usr/share/keyrings/dentalcraft.gpg).
export const PUBLIC_URL = "https://dentalcraft.app";

export function linuxDescriptors({ siteUrl, keyBinary, linux, has, sources }) {
  const out = {};
  const key64 = keyBinary.toString("base64");
  const local = (text) => text.split(PUBLIC_URL).join(siteUrl);
  if (has.deb) {
    out["dentalcraft.gpg"] = keyBinary;
    out["dentalcraft.list"] = local(sources.list);
  }
  if (has.rpm) out["dentalcraft.repo"] = local(sources.repo);
  if (has.flatpak) {
    const common = [
      "Title=DentalCraft",
      `Url=${siteUrl}/linux/flatpak/`,
      `Homepage=${siteUrl}/`,
      `Icon=${siteUrl}/android-chrome-512.png`,
      `GPGKey=${key64}`,
    ];
    out["dentalcraft.flatpakrepo"] = ["[Flatpak Repo]", ...common, "Comment=DentalCraft releases", ""].join("\n");
    out["DentalCraft.flatpakref"] = [
      "[Flatpak Ref]",
      `Name=${linux.flatpak.appId}`,
      `Branch=${linux.flatpak.branch}`,
      ...common,
      "IsRuntime=false",
      "SuggestRemoteName=dentalcraft",
      `RuntimeRepo=${linux.flatpak.runtimeRepo}`,
      "",
    ].join("\n");
  }
  return out;
}
