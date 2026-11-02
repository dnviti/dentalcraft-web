#!/usr/bin/env node
// DentalCraft static site build. No dependencies: Node >= 18.
//   node build/build.mjs            -> dist/
//   SITE_URL=https://example.org node build/build.mjs
//
// Inputs : content/site.{en,it}.json, content/site.data.json, src/, brand/, design/assets, media/video,
//          downloads/ (app archives from the release named in site.data.json, not in git)
// Output : dist/ (HTML for /en/, /it/, about pages, 404, sitemap, robots, hashed assets, media, download/)

import { createHash } from "node:crypto";
import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from "node:fs";
import { basename, dirname, extname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { aboutPage, homePage, indexPage, notFoundPage } from "./templates.mjs";

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
  const ctx = { lang, t, data, asset, siteUrl: SITE_URL, css, js, art: heroArt(t) };
  write(`${lang}/index.html`, homePage(ctx));
  write(`${lang}/about/index.html`, aboutPage(ctx));
  pages.push(`/${lang}/`, `/${lang}/about/`);
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

// Downloads: the app archives are not in git. They come from the private app release
// (see data.release) into downloads/, and are checked against the manifest before they ship.
{
  const rel = data.release;
  const lines = [];
  for (const [id, f] of Object.entries(rel.files)) {
    const from = join(ROOT, "downloads", f.name);
    if (!existsSync(from)) {
      throw new Error(
        `Missing download "downloads/${f.name}" (${id}). Fetch it with:\n` +
          `  gh release download ${rel.tag} -R ${rel.repo} -p 'dentalcraft_*' -D downloads`,
      );
    }
    const buf = readFileSync(from);
    if (buf.length !== f.size) throw new Error(`downloads/${f.name}: size ${buf.length}, expected ${f.size}`);
    const sha = createHash("sha256").update(buf).digest("hex");
    if (sha !== f.sha256) throw new Error(`downloads/${f.name}: sha256 ${sha}, expected ${f.sha256}`);
    mkdirSync(join(DIST, "download"), { recursive: true });
    cpSync(from, join(DIST, "download", f.name));
    lines.push(`${f.sha256}  ${f.name}`);
  }
  write(`download/${rel.sums}`, lines.join("\n") + "\n");
}

// robots.txt and sitemap.xml
write("robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
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
