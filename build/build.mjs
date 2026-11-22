#!/usr/bin/env node
// DentalCraft static site build. No dependencies: Node >= 18.
//   node build/build.mjs            -> dist/
//   SITE_URL=https://example.org node build/build.mjs
//
// Inputs : content/site.{en,it}.json, content/site.data.json, content/licence.md, src/, brand/, design/assets, media/video,
//          keys/ (public signing keys), downloads/ (release files of the app release named in site.data.json, not in git)
// Output : dist/ (HTML for /en/, /it/, about, download and licence pages, 404, sitemap, robots, hashed assets, media,
//          download/, update/, keys/, linux/ descriptors) and repo-input/ (files only the Linux repository stages use)

import { createHash } from "node:crypto";
import { chmodSync, cpSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from "node:fs";
import { basename, dirname, extname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { aboutPage, downloadPage, homePage, indexPage, licencePage, notFoundPage } from "./templates.mjs";
import { PUBLIC_URL, SERVED, dearmor, gpgFingerprint, linuxDescriptors, minisignVerify, releaseFiles } from "./release.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(ROOT, "dist");
const SITE_URL = (process.env.SITE_URL || "https://dentalcraft.app").replace(/\/+$/, "");

const read = (p) => readFileSync(join(ROOT, p), "utf8");
const write = (p, data) => {
  const full = join(DIST, p);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, data);
};

// ---------- content ----------

const copy = { en: JSON.parse(read("content/site.en.json")), it: JSON.parse(read("content/site.it.json")) };
const data = JSON.parse(read("content/site.data.json"));
const licenceMd = read("content/licence.md");
const gpgKeyArmored = read("keys/dentalcraft.gpg");
const gpgKeyBinary = dearmor(gpgKeyArmored);
const minisignPub = read("keys/dentalcraft.minisign.pub");
const signing = { gpgFingerprint: gpgFingerprint(gpgKeyBinary) };

// EN and IT must define the same keys.
{
  const en = Object.keys(copy.en);
  const it = new Set(Object.keys(copy.it));
  const missingIt = en.filter((k) => !it.has(k));
  const missingEn = [...it].filter((k) => !(k in copy.en));
  if (missingIt.length || missingEn.length) {
    console.error("Copy key mismatch.\n  missing in it:", missingIt, "\n  missing in en:", missingEn);
    process.exit(1);
  }
}

const translator = (lang) => (key) => {
  const v = copy[lang][key];
  if (v === undefined) throw new Error(`Missing copy key "${key}" (${lang})`);
  return v;
};

// ---------- assets (content-hashed, long cache) ----------

const hashOf = (buf) => createHash("sha256").update(buf).digest("hex").slice(0, 10);
const registry = new Map(); // logical name -> public URL

function srcPath(name) {
  return name.startsWith("brand/") || name.startsWith("design/") ? name : `src/assets/${name}`;
}

function asset(name) {
  if (registry.has(name)) return registry.get(name);
  const file = join(ROOT, srcPath(name));
  if (!existsSync(file)) throw new Error(`Asset not found: ${name}`);
  const buf = readFileSync(file);
  const ext = extname(file);
  const out = `assets/${basename(file, ext)}.${hashOf(buf)}${ext}`;
  write(out, buf);
  registry.set(name, `/${out}`);
  return `/${out}`;
}

function emit(name, text) {
  const out = `assets/${name.replace(/\.(\w+)$/, "")}.${hashOf(text)}.${name.split(".").pop()}`;
  write(out, text);
  return `/${out}`;
}

// ---------- build ----------

rmSync(DIST, { recursive: true, force: true });
mkdirSync(DIST, { recursive: true });
const REPO_INPUT = join(ROOT, "repo-input");
rmSync(REPO_INPUT, { recursive: true, force: true });
mkdirSync(REPO_INPUT, { recursive: true });

// CSS: replace {{asset:name}} tokens, then hash.
const cssSrc = read("src/styles/site.css").replace(/\{\{asset:([^}]+)\}\}/g, (_, n) => asset(n.trim()));
const css = emit("site.css", cssSrc);
const js = emit("site.js", read("src/scripts/site.js"));
const redirectJs = emit("redirect.js", read("src/scripts/redirect.js"));

// Hero art: inline SVG with translated labels.
const baseArt = read("design/assets/hero-arch.svg");
function heroArt(t) {
  const swaps = [
    ["SHELL = ARCH + OFFSET", t("art.shell")],
    ["ARCH SPINE", t("art.spine")],
    ["CLEARANCE", t("art.clearance")],
    ["ILLUSTRATION / UPPER ARCH, FDI", t("art.caption")],
  ];
  let s = baseArt.replace(/<\?xml[^>]*\?>/, "");
  for (const [from, to] of swaps) {
    if (!s.includes(`>${from}<`)) throw new Error(`Hero art label not found: ${from}`);
    s = s.replace(`>${from}<`, `>${to.replace(/&/g, "&amp;")}<`);
  }
  return s.replace("<svg ", '<svg class="art" aria-hidden="true" focusable="false" ');
}

const pages = [];
for (const lang of ["en", "it"]) {
  const t = translator(lang);
  const ctx = { lang, t, data, asset, siteUrl: SITE_URL, css, js, art: heroArt(t), licenceMd, signing };
  write(`${lang}/index.html`, homePage(ctx));
  write(`${lang}/about/index.html`, aboutPage(ctx));
  write(`${lang}/download/index.html`, downloadPage(ctx));
  write(`${lang}/licence/index.html`, licencePage(ctx));
  pages.push(`/${lang}/`, `/${lang}/about/`, `/${lang}/download/`, `/${lang}/licence/`);
}

write("index.html", indexPage({ siteUrl: SITE_URL, css, redirectJs, asset }));
write("404.html", notFoundPage({ css, asset, tEn: translator("en"), tIt: translator("it") }));

// Root files: favicons, manifest.
for (const f of [
  "favicon.ico",
  "favicon.svg",
  "apple-touch-icon-180.png",
  "android-chrome-192.png",
  "android-chrome-512.png",
  "site.webmanifest",
]) {
  cpSync(join(ROOT, "brand/favicon", f), join(DIST, f));
}

// Video: only the files the site uses.
for (const f of ["dentalcraft-presentation.webm", "dentalcraft-presentation-720p.mp4", "poster.jpg", "en.vtt", "it.vtt"]) {
  const from = join(ROOT, "media/video", f);
  if (!existsSync(from)) throw new Error(`Missing media file: media/video/${f}`);
  mkdirSync(join(DIST, "media/video"), { recursive: true });
  cpSync(from, join(DIST, "media/video", f));
}

// Release files: not in git. They come from the private app release (see data.release) into downloads/,
// and are checked against the pinned size and SHA-256 before they ship. The update manifest must also carry
// a valid minisign signature by keys/dentalcraft.minisign.pub, and point only at files served here.
{
  const rel = data.release;
  const names = releaseFiles(rel.version);
  const lines = [];
  const bufs = {};
  for (const [id, f] of Object.entries(rel.files)) {
    if (!(id in names)) throw new Error(`release.files.${id}: unknown kind (known: ${Object.keys(names).join(", ")})`);
    if (f.name !== names[id]) throw new Error(`release.files.${id}: name ${f.name}, expected ${names[id]}`);
    const from = join(ROOT, "downloads", f.name);
    if (!existsSync(from)) {
      throw new Error(
        `Missing download "downloads/${f.name}" (${id}). Fetch the release with:\n` +
          `  gh release download ${rel.tag} -R ${rel.repo} -D downloads`,
      );
    }
    const buf = readFileSync(from);
    if (buf.length !== f.size) throw new Error(`downloads/${f.name}: size ${buf.length}, expected ${f.size}`);
    const sha = createHash("sha256").update(buf).digest("hex");
    if (sha !== f.sha256) throw new Error(`downloads/${f.name}: sha256 ${sha}, expected ${f.sha256}`);
    if (id === "update" || id === "updateSig") bufs[id] = buf;
    if (SERVED.has(id)) {
      mkdirSync(join(DIST, "download"), { recursive: true });
      cpSync(from, join(DIST, "download", f.name));
      chmodSync(join(DIST, "download", f.name), 0o644); // nginx runs as uid 101, whatever the mode of the fetched file
      lines.push(`${f.sha256}  ${f.name}`);
    } else if (id === "flatpak") {
      cpSync(from, join(REPO_INPUT, f.name));
      chmodSync(join(REPO_INPUT, f.name), 0o644);
    }
  }
  if (!rel.files.linux || !rel.files.windows) throw new Error("release.files: the standalone archives (linux, windows) are required");
  if (!!bufs.update !== !!bufs.updateSig) throw new Error("release.files: update and updateSig go together");
  if (bufs.update) {
    const comment = minisignVerify(minisignPub, bufs.update, bufs.updateSig.toString("utf8"));
    const m = JSON.parse(bufs.update.toString("utf8"));
    if (m.version !== rel.version || m.tag !== rel.tag) throw new Error(`update.json: version ${m.version} / ${m.tag}, expected ${rel.version}`);
    const byName = new Map(Object.entries(rel.files).filter(([id]) => SERVED.has(id)).map(([, f]) => [f.name, f]));
    for (const [kind, a] of Object.entries(m.assets || {})) {
      // The signed manifest always names the public origin (release.mjs PUBLIC_URL), whatever SITE_URL a build uses.
      const url = new URL(a.url);
      const f = url.origin === new URL(PUBLIC_URL).origin ? byName.get(basename(url.pathname)) : undefined;
      if (!f || f.sha256 !== a.sha256 || f.size !== a.size) throw new Error(`update.json: asset ${kind} (${a.url}) is not a served release file`);
    }
    write("update/stable.json", bufs.update);
    write("update/stable.json.minisig", bufs.updateSig);
    console.log(`update manifest ${m.version} verified (${comment})`);
  }
  write(`download/${rel.sums}`, lines.join("\n") + "\n");

  // Public keys and the one-time setup files of the Linux repositories (only for the formats this release has).
  write("keys/dentalcraft.gpg", gpgKeyArmored);
  write("keys/dentalcraft.minisign.pub", minisignPub);
  const has = { deb: !!rel.files.deb, rpm: !!rel.files.rpm, flatpak: !!rel.files.flatpak };
  const sources = { list: read("linux/dentalcraft.list"), repo: read("linux/dentalcraft.repo") };
  for (const [name, text] of Object.entries(linuxDescriptors({ siteUrl: SITE_URL, keyBinary: gpgKeyBinary, linux: data.linux, has, sources }))) {
    write(`linux/${name}`, text);
  }
}

// robots.txt and sitemap.xml
write("robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);

// /.well-known/security.txt (RFC 9116). Contacts come from SECURITY.md; Expires is computed at build time (SOURCE_DATE_EPOCH honoured).
{
  const policy = read("SECURITY.md");
  const advisories = policy.match(/https:\/\/github\.com\/[\w.-]+\/[\w.-]+\/security\/advisories\/new/)?.[0];
  const email = policy.match(/[\w.+-]+@[\w-]+(?:\.[\w-]+)+/)?.[0];
  if (!advisories || !email) throw new Error("SECURITY.md: reporting URL or e-mail address not found (needed for security.txt)");
  const now = process.env.SOURCE_DATE_EPOCH ? Number(process.env.SOURCE_DATE_EPOCH) * 1000 : Date.now();
  const expires = new Date(now + 335 * 86400_000).toISOString().replace(/\.\d{3}Z$/, "Z"); // about 11 months
  write(
    ".well-known/security.txt",
    [
      `Contact: ${advisories}`,
      `Contact: mailto:${email}`,
      `Expires: ${expires}`,
      "Preferred-Languages: en, it",
      `Canonical: ${SITE_URL}/.well-known/security.txt`,
      "",
    ].join("\n"),
  );
}
const alt = (p) => {
  const rel = p.replace(/^\/(en|it)\//, "");
  return ["en", "it"].map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${SITE_URL}/${l}/${rel}"/>`).join("\n");
};
write(
  "sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n` +
    pages.map((p) => `  <url>\n    <loc>${SITE_URL}${p}</loc>\n${alt(p)}\n  </url>`).join("\n") +
    `\n</urlset>\n`,
);

// ---------- link check: every root-relative URL in the HTML must exist ----------

function walk(dir) {
  return readdirSync(dir).flatMap((n) => {
    const p = join(dir, n);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}
const problems = [];
for (const file of walk(DIST).filter((f) => f.endsWith(".html"))) {
  const html = readFileSync(file, "utf8");
  for (const m of html.matchAll(/(?:href|src|poster)="(\/[^"#?]*)/g)) {
    const url = m[1];
    if (url === "/") continue;
    const target = join(DIST, url);
    if (!(existsSync(target) && (statSync(target).isFile() || existsSync(join(target, "index.html"))))) {
      problems.push(`${relative(DIST, file)}: ${url}`);
    }
  }
  // fragment links on the same page must hit an id
  for (const m of html.matchAll(/href="#([^"]+)"/g)) {
    if (!html.includes(`id="${m[1]}"`)) problems.push(`${relative(DIST, file)}: #${m[1]}`);
  }
}
if (problems.length) {
  console.error("Broken links:\n  " + problems.join("\n  "));
  process.exit(1);
}

const count = walk(DIST).length;
console.log(`dist/ built: ${count} files, site url ${SITE_URL}`);
