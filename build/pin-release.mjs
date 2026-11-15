#!/usr/bin/env node
// Pin an app release in content/site.data.json (block "release") from its downloaded files.
//   gh release download vX.Y.Z -R dnviti-personal-org/dentalcraft-app -D downloads
//   node build/pin-release.mjs downloads [--date YYYY-MM-DD]
// Reads the release's dentalcraft_<V>_SHA256SUMS.txt, checks every known file against it, and records
// name, size and SHA-256 of each one present. The date comes from --date, else from update.json, else
// stays the same for the same version, else today (UTC). Only the release block is rewritten.

import { createHash } from "node:crypto";
import { existsSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { releaseFiles } from "./release.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const DATA = join(ROOT, "content/site.data.json");

const args = process.argv.slice(2);
const dir = args.find((a) => !a.startsWith("--"));
const dateArg = args.includes("--date") ? args[args.indexOf("--date") + 1] : undefined;
if (!dir || (dateArg !== undefined && !/^\d{4}-\d{2}-\d{2}$/.test(dateArg))) {
  console.error("usage: node build/pin-release.mjs <downloads dir> [--date YYYY-MM-DD]");
  process.exit(2);
}

const sumsFiles = readdirSync(dir).filter((n) => /^dentalcraft_.+_SHA256SUMS\.txt$/.test(n));
if (sumsFiles.length !== 1) throw new Error(`${dir}: expected one dentalcraft_<version>_SHA256SUMS.txt, found ${sumsFiles.length}`);
const sumsName = sumsFiles[0];
const version = sumsName.slice("dentalcraft_".length, -"_SHA256SUMS.txt".length);
if (!/^\d+\.\d+\.\d+(-[0-9A-Za-z.-]+)?$/.test(version)) throw new Error(`bad version in ${sumsName}: ${version}`);

const sums = new Map();
for (const line of readFileSync(join(dir, sumsName), "utf8").split("\n")) {
  const m = line.match(/^([0-9a-f]{64}) [ *](.+)$/);
  if (m) sums.set(m[2], m[1]);
}

const files = {};
for (const [kind, name] of Object.entries(releaseFiles(version))) {
  if (!sums.has(name)) continue;
  const path = join(dir, name);
  if (!existsSync(path)) throw new Error(`${name} is in ${sumsName} but not in ${dir}`);
  const sha256 = createHash("sha256").update(readFileSync(path)).digest("hex");
  if (sha256 !== sums.get(name)) throw new Error(`${name}: sha256 ${sha256} differs from ${sumsName}`);
  files[kind] = { name, size: statSync(path).size, sha256 };
}
if (!files.linux || !files.windows) throw new Error("the standalone archives are missing from the release");

const text = readFileSync(DATA, "utf8");
const data = JSON.parse(text);
const old = data.release;
let date = dateArg;
if (!date && files.update) date = JSON.parse(readFileSync(join(dir, files.update.name), "utf8")).date;
if (!date) date = old.version === version ? old.date : new Date().toISOString().slice(0, 10);

const release = { version, repo: old.repo, tag: `v${version}`, date, sums: sumsName, files };

// Replace only the release block, keeping the hand formatting of the rest of the file.
const start = text.indexOf('  "release": {');
let i = text.indexOf("{", start), depth = 0;
for (; i < text.length; i++) {
  if (text[i] === "{") depth++;
  else if (text[i] === "}" && --depth === 0) break;
}
const block = '  "release": ' + JSON.stringify(release, null, 2).replace(/\n/g, "\n  ");
writeFileSync(DATA, text.slice(0, start) + block + text.slice(i + 1));
JSON.parse(readFileSync(DATA, "utf8"));
console.log(`pinned ${version} (${Object.keys(files).join(", ")}) in content/site.data.json`);
