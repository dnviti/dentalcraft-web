// HTML templates for the DentalCraft site. Pure functions: (ctx) => string.
// ctx = { lang, t, data, asset, siteUrl, art }

export const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const LANGS = ["en", "it"];

// ---------- icons and markers (inline SVG, decorative) ----------

const svg = (w, h, body, cls = "") =>
  `<svg class="${cls}" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="none" aria-hidden="true" focusable="false">${body}</svg>`;

const ICON = {
  play: svg(12, 14, '<path d="M0 0L12 7L0 14Z" fill="currentColor"/>', "ico"),
  playLg: svg(24, 28, '<path d="M0 0L24 14L0 28Z" fill="currentColor"/>', "ico"),
  lock: svg(
    12,
    15,
    '<rect x="0.75" y="6.25" width="10.5" height="8" rx="1.25" stroke="currentColor" stroke-width="1.5"/><path d="M3 6V4a3 3 0 0 1 6 0v2" stroke="currentColor" stroke-width="1.5"/>',
    "ico",
  ),
  plus: svg(
    14,
    14,
    '<path d="M7 0.5V13.5M0.5 7H13.5" stroke="currentColor" stroke-width="1.5"/>',
    "ico ico--plus",
  ),
  download: svg(
    14,
    16,
    '<path d="M7 0.75V10.5M2.5 6.5L7 11L11.5 6.5M1 14.75H13" stroke="currentColor" stroke-width="1.5"/>',
    "ico",
  ),
  minus: svg(14, 14, '<path d="M0.5 7H13.5" stroke="currentColor" stroke-width="1.5"/>', "ico ico--minus"),
};

const MARK = {
  exists: svg(10, 10, '<circle cx="5" cy="5" r="5" fill="currentColor"/>', "mk"),
  progress: svg(
    10,
    10,
    '<circle cx="5" cy="5" r="4.25" stroke="currentColor" stroke-width="1.5"/><path d="M5 1.5a3.5 3.5 0 0 0 0 7z" fill="currentColor"/>',
    "mk",
  ),
  planned: svg(
    10,
    10,
    '<circle cx="5" cy="5" r="4.25" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2 2"/>',
    "mk",
  ),
};

const STATUS_KEY = { exists: "status.exists", progress: "status.progress", planned: "status.planned" };

// A status tag: marker shape + word. `kind` is exists | progress | planned.
const tag = (ctx, kind, label, extra = "") =>
  `<span class="tag tag--${kind}${extra ? " " + extra : ""}">${MARK[kind]}<span>${esc(label ?? ctx.t(STATUS_KEY[kind]))}</span></span>`;

const statusTag = (ctx, kind) => tag(ctx, kind);

// ---------- URLs ----------

const prefix = (lang) => `/${lang}/`;
const aboutPath = (lang) => `/${lang}/about/`;
const downloadPath = (lang) => `/${lang}/download/`;
const licencePath = (lang) => `/${lang}/licence/`;
const PAGE_REL = { home: "", about: "about/", download: "download/", licence: "licence/" };

// Link to a section: same page => hash only.
function sectionHref(ctx, page, target, id) {
  const base = target === page ? "" : target === "about" ? aboutPath(ctx.lang) : prefix(ctx.lang);
  return `${base}#${id}`;
}

const NAV = [
  ["presentation", "home"],
  ["vision", "home"],
  ["aligners", "home"],
  ["roadmap", "home"],
  ["technology", "about"],
  ["regulatory", "about"],
  ["downloads", "home"],
  ["faq", "about"],
];

// ---------- shared parts ----------

function langSwitch(ctx, page, cls = "") {
  const rel = PAGE_REL[page];
  const item = (l, label, name) => {
    const cur = l === ctx.lang;
    return `<a href="/${l}/${rel}" lang="${l}" hreflang="${l}" data-lang-link="${l}"${cur ? ' aria-current="true"' : ""}><span aria-hidden="true">${label}</span><span class="vh">${esc(name)}</span></a>`;
  };
  return `<nav class="lang ${cls}" aria-label="${esc(ctx.t("a11y.langNav"))}">${item("en", "EN", ctx.t("a11y.langEn"))}${item("it", "IT", ctx.t("a11y.langIt"))}</nav>`;
}

function header(ctx, page) {
  const { t, asset } = ctx;
  const links = NAV.map(([id, target]) => {
    return `<li><a class="nl" href="${sectionHref(ctx, page, target, id)}" data-section="${target === page ? id : ""}">${esc(t("nav." + id))}</a></li>`;
  }).join("");
  const menuLinks = NAV.map(
    ([id, target]) =>
      `<li><a class="nl" href="${sectionHref(ctx, page, target, id)}" data-section="${target === page ? id : ""}">${esc(t("nav." + id))}</a></li>`,
  ).join("");
  const cta = sectionHref(ctx, page, "home", "downloads");
  const bandLink = sectionHref(ctx, page, "about", "regulatory");
  return `<div class="top" id="top-block">
<header class="hdr">
<div class="wrap hdr__in">
<a class="hdr__logo" href="${prefix(ctx.lang)}" aria-label="${esc(t("a11y.home"))}"><img src="${asset("brand/svg/dentalcraft-lockup-horizontal-dark.svg")}" alt="" width="168" height="30"></a>
<nav class="hdr__nav" aria-label="${esc(t("a11y.mainNav"))}"><ul>${links}</ul></nav>
<div class="hdr__act">
${langSwitch(ctx, page)}
<a class="btn btn--secondary hdr__cta" href="${cta}">${esc(t("header.cta"))}</a>
<button class="menu-btn" type="button" aria-expanded="false" aria-controls="menu-sheet" aria-label="${esc(t("a11y.menu"))}" data-label-open="${esc(t("a11y.menu"))}" data-label-close="${esc(t("a11y.menuClose"))}"><span></span><span></span><span></span></button>
</div>
</div>
</header>
<div class="band">
<div class="wrap band__in">
<p class="band__text">${MARK.progress}<span>${esc(t("disclaimer.band"))}</span></p>
<a class="band__link" href="${bandLink}">${esc(t("disclaimer.link"))}</a>
</div>
</div>
<div class="sheet" id="menu-sheet">
<div class="sheet__in">
<nav aria-label="${esc(t("a11y.mainNav"))}"><ul>${menuLinks}</ul></nav>
<a class="btn btn--secondary" href="${cta}">${esc(t("header.cta"))}</a>
</div>
</div>
</div>`;
}

function footer(ctx, page) {
  const { t, asset } = ctx;
  const link = (id, target, key) =>
    `<li><a class="nl nl--foot" href="${sectionHref(ctx, page, target, id)}">${esc(t(key))}</a></li>`;
  const mail = t("footer.contact");
  return `<footer class="foot">
<div class="wrap foot__in">
<div class="foot__top">
<div class="foot__brand">
<a href="${prefix(ctx.lang)}" aria-label="${esc(t("a11y.home"))}"><img src="${asset("brand/svg/dentalcraft-lockup-horizontal-dark.svg")}" alt="" width="168" height="30"></a>
<p>${esc(t("footer.tagline"))}</p>
</div>
<nav class="foot__col foot__links" aria-label="${esc(t("a11y.sectionNav"))}">
<p class="mono-label foot__label">${esc(t("footer.links.label"))}</p>
<ul>${link("presentation", "home", "nav.presentation")}${link("vision", "home", "nav.vision")}${link("roadmap", "home", "nav.roadmap")}${link("downloads", "home", "nav.downloads")}${link("faq", "about", "nav.faq")}</ul>
</nav>
<div class="foot__col foot__contact">
<p class="mono-label foot__label">${esc(t("footer.contact.label"))}</p>
<a class="ul" href="mailto:${esc(mail)}">${esc(mail)}</a>
</div>
<div class="foot__col foot__lang">
<p class="mono-label foot__label">${esc(t("footer.language.label"))}</p>
${langSwitch(ctx, page)}
</div>
</div>
<p class="foot__disc">${esc(t("disclaimer.full"))}</p>
<div class="foot__legal">
<p>${esc(t("footer.copyright"))}</p>
<ul class="foot__legal-links">
<li><a class="ul" href="${licencePath(ctx.lang)}">${esc(t("footer.licence"))}</a></li>
<li><a class="ul" href="${sectionHref(ctx, page, "about", "privacy")}">${esc(t("footer.privacy"))}</a></li>
<li><a class="ul" href="${esc(ctx.data.links.github)}" rel="noopener">${esc(t("footer.source"))}</a></li>
</ul>
</div>
</div>
</footer>`;
}

const rail = (label, sub, hideSubMobile = false) =>
  `<div class="rail"><p class="rail__label mono-label">${esc(label)}</p>${sub ? `<p class="rail__sub mono-label${hideSubMobile ? " rail__sub--hm" : ""}">${esc(sub)}</p>` : ""}</div>`;

const banner = (text) =>
  `<p class="intent">${MARK.planned}<span>${esc(text)}</span></p>`;

// ---------- head ----------

function head(ctx, page) {
  const { t, lang, siteUrl, asset } = ctx;
  const key = page;
  const title = t(`meta.${key}.title`);
  const desc = t(`meta.${key}.description`);
  const rel = PAGE_REL[page];
  const url = (l) => `${siteUrl}/${l}/${rel}`;
  const og = `${siteUrl}${asset("brand/og/og-image.png")}`;
  const locale = lang === "it" ? "it_IT" : "en_US";
  const other = lang === "it" ? "en_US" : "it_IT";
  return `<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta name="theme-color" content="#0F1214">
<meta name="color-scheme" content="dark">
<link rel="canonical" href="${url(lang)}">
<link rel="alternate" hreflang="en" href="${url("en")}">
<link rel="alternate" hreflang="it" href="${url("it")}">
<link rel="alternate" hreflang="x-default" href="${siteUrl}/">
<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon-180.png">
<link rel="manifest" href="/site.webmanifest">
<meta property="og:type" content="website">
<meta property="og:site_name" content="DentalCraft">
<meta property="og:title" content="${esc(t(`meta.${key}.ogTitle`))}">
<meta property="og:description" content="${esc(t(`meta.${key}.ogDescription`))}">
<meta property="og:url" content="${url(lang)}">
<meta property="og:locale" content="${locale}">
<meta property="og:locale:alternate" content="${other}">
<meta property="og:image" content="${og}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(t("meta.og.alt"))}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(t(`meta.${key}.ogTitle`))}">
<meta name="twitter:description" content="${esc(t(`meta.${key}.ogDescription`))}">
<meta name="twitter:image" content="${og}">
<meta name="twitter:image:alt" content="${esc(t("meta.og.alt"))}">
<link rel="preload" href="${asset("fonts/atkinson-hyperlegible-next-var.woff2")}" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="${asset("fonts/b612-mono-400.woff2")}" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="${ctx.css}">
<script src="${ctx.js}" defer></script>`;
}

function shell(ctx, page, body) {
  return `<!doctype html>
<html lang="${ctx.lang}">
<head>
${head(ctx, page)}
</head>
<body>
<a class="skip" href="#main">${esc(ctx.t("a11y.skip"))}</a>
${header(ctx, page)}
<main id="main">
${body}
</main>
${footer(ctx, page)}
</body>
</html>
`;
}

// ---------- Home ----------

function hero(ctx) {
  const { t } = ctx;
  return `<section class="hero" id="top" aria-labelledby="hero-h">
<div class="hero__copy">
${tag(ctx, "progress", t("hero.badge"), "hero__badge")}
<h1 class="hero__h" id="hero-h">${esc(t("hero.headline"))}</h1>
<p class="hero__sub">${esc(t("hero.subhead"))}</p>
<div class="hero__cta">
<a class="btn btn--primary" href="#video">${ICON.play}<span>${esc(t("hero.cta.primary"))}</span></a>
<a class="btn btn--secondary" href="#downloads">${esc(t("hero.cta.secondary"))}</a>
</div>
<p class="disc">${esc(t("disclaimer.full"))}</p>
<p class="hero__micro small">${esc(t("hero.microcopy"))}</p>
</div>
<div class="hero__art" role="img" aria-label="${esc(t("hero.art.alt"))}">${ctx.art}</div>
</section>`;
}

function ledger(ctx) {
  const rows = ctx.data.presentationStatus
    .map(
      (r) =>
        `<li class="ledger__row"><span>${esc(ctx.t(r.key))}</span>${statusTag(ctx, r.status)}</li>`,
    )
    .join("");
  return `<div class="ledger"><h3 class="mono-label ledger__title">${esc(ctx.t("presentation.status.title"))}</h3><ul>${rows}</ul></div>`;
}

function videoBlock(ctx) {
  const { t, lang, asset } = ctx;
  const m = (f) => `/media/video/${f}`;
  const scenes = ctx.data.transcriptTimes
    .map(
      (time, i) =>
        `<li><span class="mono-label tr__time">${time}</span><span>${esc(t(`transcript.s${i + 1}`))}</span></li>`,
    )
    .join("");
  return `<div class="video" id="video">
<h3 class="h2 video__h" id="video-h">${esc(t("video.heading"))}</h3>
<div class="player" data-player>
<video class="player__video" controls preload="none" playsinline poster="${m("poster.jpg")}" aria-label="${esc(t("video.aria"))}">
<source src="${m("dentalcraft-presentation.webm")}" type="video/webm">
<source src="${m("dentalcraft-presentation-720p.mp4")}" type="video/mp4">
<track kind="subtitles" srclang="it" label="Italiano" src="${m("it.vtt")}" default>
<track kind="subtitles" srclang="en" label="English" src="${m("en.vtt")}">
<p>${esc(t("video.fallback"))}</p>
</video>
<button class="player__poster" type="button" data-player-start aria-label="${esc(t("video.play"))}. ${esc(t("video.aria"))}">
<span class="player__top mono-label"><span>${esc(t("video.kicker"))}</span><span>${esc(t("video.duration"))}</span></span>
<span class="player__bottom"><span class="player__play">${ICON.playLg}</span></span>
</button>
</div>
<div class="video__cap">
<p class="small video__capt">${esc(t("video.caption"))} ${esc(t("video.meta"))}</p>
<details class="transcript" id="transcript">
<summary>${esc(t("video.transcript"))}</summary>
<p class="small">${esc(t("video.transcript.note"))} ${esc(t("transcript.concept"))}</p>
<ol class="tr">${scenes}</ol>
</details>
</div>
</div>`;
}

function screenshots(ctx) {
  const { t, lang, asset } = ctx;
  const fig = (n, base) => {
    const s960 = asset(`img/${base}-${lang}-960.webp`);
    const s1920 = asset(`img/${base}-${lang}-1920.webp`);
    return `<figure class="shot">
<div class="shot__frame">
<img src="${s960}" srcset="${s960} 960w, ${s1920} 1920w" sizes="(min-width: 1200px) 465px, (min-width: 768px) 45vw, 100vw" width="960" height="540" loading="lazy" decoding="async" alt="${esc(t(`screens.${n}.alt`))}">
${tag(ctx, "progress", t("screens.badge"), "tag--sunken shot__badge")}
</div>
<figcaption class="small">${esc(t(`screens.${n}.caption`))}</figcaption>
</figure>`;
  };
  return `<div class="screens">
<div class="screens__head"><h3 class="h2" id="screens-h">${esc(t("screens.heading"))}</h3><p class="small">${esc(t("screens.note"))}</p></div>
<div class="screens__grid">${fig(1, "home")}${fig(2, "aligners")}</div>
</div>`;
}

function presentation(ctx) {
  const { t } = ctx;
  return `<section class="sec sec--panel" id="presentation" aria-labelledby="presentation-h">
<div class="wrap sec__grid">
${rail(t("presentation.label"), t("presentation.rail"))}
<div class="content content--stack">
<div class="intro">
<div class="intro__copy">
<h2 class="h1" id="presentation-h">${esc(t("presentation.headline"))}</h2>
<p class="sec-text">${esc(t("presentation.body.1"))}</p>
<p class="sec-text">${esc(t("presentation.body.2"))}</p>
</div>
${ledger(ctx)}
</div>
${videoBlock(ctx)}
${screenshots(ctx)}
</div>
</div>
</section>`;
}

function vision(ctx) {
  const { t } = ctx;
  const cells = [1, 2, 3, 4, 5, 6, 7, 8]
    .map(
      (n) =>
        `<li class="princ"><h3 class="h3">${esc(t(`vision.p${n}.title`))}</h3><p class="detail">${esc(t(`vision.p${n}.body`))}</p></li>`,
    )
    .join("");
  return `<section class="sec" id="vision" aria-labelledby="vision-h">
<div class="wrap sec__grid">
${rail(t("vision.label"), t("vision.rail"))}
<div class="content content--stack-sm">
<h2 class="h1" id="vision-h">${esc(t("vision.headline"))}</h2>
<p class="lead max640">${esc(t("vision.body"))}</p>
${banner(t("vision.banner"))}
</div>
<ul class="princs">${cells}</ul>
<p class="small sec__micro">${esc(t("vision.microcopy"))}</p>
</div>
</section>`;
}

function roadmap(ctx) {
  const { t, data, asset } = ctx;
  const mods = data.modules;
  const tabs = mods
    .map(
      (m) =>
        `<div class="mod__tab mod__tab--${m.status}"><img src="${asset(`brand/svg/module-${m.code}-tab-dark.svg`)}" alt="" width="168" height="202" loading="lazy"></div>`,
    )
    .join("");
  const labels = mods
    .map(
      (m) =>
        `<li class="mod"><h3 class="h3 mod__name">${esc(t(`roadmap.m${m.n}.name`))}</h3>${statusTag(ctx, m.status)}${m.n === 1 ? `<p class="small mod__note">${esc(t("roadmap.m1.note"))}</p>` : ""}</li>`,
    )
    .join("");
  return `<section class="sec sec--panel sec--pre" id="roadmap" aria-labelledby="roadmap-h">
<div class="wrap sec__grid">
${rail(t("roadmap.label"), t("roadmap.rail"))}
<div class="content content--stack-sm">
<h2 class="h1" id="roadmap-h">${esc(t("roadmap.headline"))}</h2>
<p class="lead max640">${esc(t("roadmap.body"))}</p>
<div class="guide">
<div class="guide__scroll" role="region" aria-label="${esc(t("roadmap.alt"))}" tabindex="0">
<div class="guide__tabs" aria-hidden="true">${tabs}</div>
<ul class="guide__labels">${labels}</ul>
</div>
<div class="core"><span class="core__label mono-code">${esc(t("roadmap.core.label"))}</span><span class="small core__items">${esc(t("roadmap.core.items"))}</span></div>
</div>
<p class="small">${esc(t("roadmap.microcopy"))}</p>
</div>
</div>
</section>`;
}

function aligners(ctx) {
  const { t, data } = ctx;
  const rows = data.alignerStages
    .map(
      (s) =>
        `<li class="stage stage--${s.status}"><span class="stage__mk">${MARK[s.status]}</span><h3 class="h3 stage__group">${esc(t(`aligners.s${s.n}.group`))}</h3><div class="stage__detail"><p class="stage__micro">${esc(t(`aligners.s${s.n}.micro`))}</p><p class="detail stage__list">${esc(t(`aligners.s${s.n}.stages`))}</p></div><span class="stage__tag">${statusTag(ctx, s.status)}</span></li>`,
    )
    .join("");
  return `<section class="sec sec--panel sec--cont" id="aligners" aria-labelledby="aligners-h">
<div class="wrap sec__grid">
${rail(t("aligners.label"), t("aligners.rail"))}
<div class="content content--stack-sm">
<h2 class="h1" id="aligners-h">${esc(t("aligners.headline"))}</h2>
<p class="lead">${esc(t("aligners.body"))}</p>
${banner(t("aligners.banner"))}
<div class="legend">
${["exists", "progress", "planned"]
  .filter((k) => data.alignerStages.some((s) => s.status === k))
  .map((k) => `<p>${statusTag(ctx, k)}<span class="small">${esc(t(`aligners.legend.${k === "progress" ? "inprogress" : k}`))}</span></p>`)
  .join("\n")}
</div>
<ol class="stages">${rows}</ol>
</div>
</div>
</section>`;
}

// "24.3 MB" / "24,3 MB"
const fmtSize = (lang, bytes) =>
  `${new Intl.NumberFormat(lang, { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(bytes / 1e6)} MB`;
const fmtDate = (lang, iso) => new Intl.DateTimeFormat(lang, { dateStyle: "long", timeZone: "UTC" }).format(new Date(iso));

function downloads(ctx) {
  const { t, data, lang } = ctx;
  const rel = data.release;
  const card = (p) => {
    const f = p.file ? rel.files[p.file] : null;
    const handle = `<div class="pcard__handle"><span class="pcard__code" aria-hidden="true">${p.code}</span>${tag(ctx, f ? "progress" : "planned", t(p.tag))}</div>`;
    const title = `<h3 class="h2">${esc(t(`downloads.platform.${p.id}`))}</h3>`;
    if (!f) {
      return `<li class="pcard">${handle}<div class="pcard__body">${title}<button class="btn btn--disabled" type="button" aria-disabled="true">${ICON.lock}<span>${esc(t("downloads.button"))}</span></button></div></li>`;
    }
    const meta = t("downloads.version").replace("{version}", rel.version).replace("{date}", fmtDate(lang, rel.date));
    return `<li class="pcard">${handle}<div class="pcard__body">${title}
<a class="btn btn--primary" href="${downloadPath(lang)}#${p.id}">${ICON.download}<span>${esc(t(`downloads.get.${p.id}`))}</span></a>
<p class="detail">${esc(t(`downloads.req.${p.id}`))}</p>
<p class="small dl-meta">${esc(meta)}</p>
</div></li>`;
  };
  const cards = data.platforms.map(card).join("");
  const note = esc(t("downloads.note")).replace(
    esc(t("downloads.note.link")),
    `<a class="ul" href="${aboutPath(ctx.lang)}#privacy">${esc(t("downloads.note.link"))}</a>`,
  );
  const mail = t("contact.email");
  return `<section class="sec" id="downloads" aria-labelledby="downloads-h">
<div class="wrap sec__grid">
${rail(t("downloads.label"), t("downloads.rail"), true)}
<div class="content content--stack-sm">
<h2 class="display" id="downloads-h">${esc(t("downloads.headline"))}</h2>
<p class="lead max640">${esc(t("downloads.body"))}</p>
<ul class="pcards">${cards}</ul>
<div class="dl-info">
<p class="small">${esc(t("downloads.smartscreen"))}</p>
<p class="dl-terms">${esc(t("downloads.terms"))} <a class="ul" href="${licencePath(ctx.lang)}">${esc(t("downloads.terms.link"))}</a></p>
<p class="small"><a class="ul" href="${downloadPath(ctx.lang)}#whats-new">${esc(t("new.link").replace("{version}", rel.version))}</a></p>
<p class="small"><a class="ul" href="/download/${rel.sums}">${esc(t("downloads.sums.link"))}</a></p>
</div>
<p class="small dl-note">${note}</p>
<div class="dl-after">
<p class="dl-contact">${esc(t("downloads.contact"))} <a class="ul" href="mailto:${esc(mail)}">${esc(mail)}</a></p>
<p class="disc disc--sm">${esc(t("disclaimer.full"))}</p>
</div>
</div>
</div>
</section>`;
}

export function homePage(ctx) {
  const body = [hero(ctx), presentation(ctx), vision(ctx), roadmap(ctx), aligners(ctx), downloads(ctx)].join("\n");
  return shell(ctx, "home", body);
}

// ---------- Download ----------

// A terminal command with a copy button (site.js shows the button; without JS the text stays selectable).
function cmd(ctx, lines) {
  return `<div class="cmd"><pre class="cmd__pre"><code>${lines.map(esc).join("\n")}</code></pre><button class="cmd__copy" type="button" data-copy hidden data-label-done="${esc(ctx.t("dl.copied"))}">${esc(ctx.t("dl.copy"))}</button></div>`;
}

// Download button, then version, size, date and the checksum of one release file.
function fileLink(ctx, f, label, kind = "secondary") {
  const { t, lang, data } = ctx;
  const meta = t("downloads.meta")
    .replace("{version}", data.release.version)
    .replace("{size}", fmtSize(lang, f.size))
    .replace("{date}", fmtDate(lang, data.release.date));
  return `<a class="btn btn--${kind}" href="/download/${f.name}" download>${ICON.download}<span>${esc(label)}</span></a>
<p class="small dl-meta">${esc(meta)} · <span class="dl-name">${esc(f.name)}</span></p>
<details class="dl-sum"><summary>${esc(t("downloads.checksum"))}</summary><code class="dl-hash">${f.sha256}</code></details>`;
}

// One way to get the app: heading, text, then commands and buttons.
function option(ctx, id, { recommended = false, body, parts }) {
  const { t } = ctx;
  const rec = recommended ? tag(ctx, "exists", t("dl.recommended"), "dlopt__tag") : "";
  return `<li class="dlopt" id="${id}">
<div class="dlopt__head"><h4 class="h3">${esc(t(`dl.${id}.title`))}</h4>${rec}</div>
<p class="detail">${esc(body ?? t(`dl.${id}.body`))}</p>
${parts.join("\n")}
</li>`;
}

const unavailable = (ctx) =>
  `<button class="btn btn--disabled" type="button" aria-disabled="true">${ICON.lock}<span>${esc(ctx.t("downloads.button"))}</span></button>`;

function group(ctx, key, intro, options) {
  const { t } = ctx;
  return `<div class="dlgroup">
<h3 class="mono-label dlgroup__h">${esc(t(`dl.${key}`))}</h3>
<p class="small">${esc(intro)}</p>
${options.length ? `<ul class="dlopts">${options.join("\n")}</ul>` : unavailable(ctx)}
</div>`;
}

function linuxInstallers(ctx) {
  const { t, siteUrl, data } = ctx;
  const files = data.release.files;
  const out = [];
  if (files.flatpak) {
    out.push(
      option(ctx, "flatpak", {
        recommended: true,
        parts: [
          `<a class="btn btn--primary" href="/linux/DentalCraft.flatpakref">${esc(t("dl.flatpak.open"))}</a>`,
          `<p class="small">${esc(t("dl.terminal"))}</p>`,
          cmd(ctx, [`flatpak install --user --from ${siteUrl}/linux/DentalCraft.flatpakref`]),
        ],
      }),
    );
  }
  if (files.rpm) {
    out.push(
      option(ctx, "dnf", {
        parts: [
          cmd(ctx, [`sudo dnf config-manager addrepo --from-repofile=${siteUrl}/linux/dentalcraft.repo`, "sudo dnf install dentalcraft"]),
          `<p class="small"><a class="ul" href="/download/${files.rpm.name}" download>${esc(t("dl.rpm.link"))}</a></p>`,
        ],
      }),
    );
  }
  if (files.deb) {
    out.push(
      option(ctx, "apt", {
        parts: [
          cmd(ctx, [
            `curl -fsSL ${siteUrl}/linux/dentalcraft.gpg | sudo tee /usr/share/keyrings/dentalcraft.gpg > /dev/null`,
            `curl -fsSL ${siteUrl}/linux/dentalcraft.list | sudo tee /etc/apt/sources.list.d/dentalcraft.list > /dev/null`,
            "sudo apt update && sudo apt install dentalcraft",
          ]),
          `<p class="small"><a class="ul" href="/download/${files.deb.name}" download>${esc(t("dl.deb.link"))}</a></p>`,
        ],
      }),
    );
  }
  if (files.appimage) {
    out.push(
      option(ctx, "appimage", {
        parts: [fileLink(ctx, files.appimage, t("dl.appimage.get")), cmd(ctx, [`chmod +x ${files.appimage.name}`, `./${files.appimage.name}`])],
      }),
    );
  }
  return out;
}

function windowsInstallers(ctx) {
  const { t, data } = ctx;
  const files = data.release.files;
  const out = [];
  if (files.exe) out.push(option(ctx, "exe", { recommended: true, parts: [fileLink(ctx, files.exe, t("dl.exe.get"), "primary")] }));
  if (files.msi) {
    out.push(
      option(ctx, "msi", {
        parts: [fileLink(ctx, files.msi, t("dl.msi.get")), `<p class="small">${esc(t("dl.msi.silent"))}</p>`, cmd(ctx, [`msiexec /i ${files.msi.name} /qn`])],
      }),
    );
  }
  return out;
}

function osCard(ctx, p, installers, standalone) {
  const { t } = ctx;
  return `<li class="pcard dlos" id="${p.id}">
<div class="pcard__handle"><span class="pcard__code" aria-hidden="true">${p.code}</span>${tag(ctx, standalone ? "progress" : "planned", t(p.tag))}</div>
<div class="pcard__body">
<h2 class="h2" id="${p.id}-h">${esc(t(`downloads.platform.${p.id}`))}</h2>
${standalone ? `<p class="detail">${esc(t(`dl.req.${p.id}`))}</p>\n<div class="dlos__cols">${installers}${standalone}</div>` : unavailable(ctx)}
</div>
</li>`;
}

function downloadBody(ctx) {
  const { t, data, lang, signing } = ctx;
  const rel = data.release;
  const files = rel.files;
  // Amber marks one action per card: the recommended installer, or the standalone file when there is no installer.
  const card = (p, installers, intro, standaloneId, standaloneFile, after = "") => {
    const kind = installers.length ? "secondary" : "primary";
    return osCard(
      ctx,
      p,
      group(ctx, "installer", t(`dl.installer.${p.id}`), installers),
      group(ctx, "standalone", intro, [
        option(ctx, standaloneId, { parts: [fileLink(ctx, standaloneFile, t(`dl.${standaloneId}.get`), kind)] }),
      ]) + after,
    );
  };
  const cards = data.platforms
    .map((p) => {
      if (p.id === "linux") return card(p, linuxInstallers(ctx), t("dl.standalone.linux"), "targz", files.linux);
      if (p.id === "windows") {
        const warn = `<p class="small dlos__warn">${MARK.progress}<span>${esc(t("downloads.smartscreen"))}</span></p>`;
        return card(p, windowsInstallers(ctx), t("dl.standalone.windows"), "zip", files.windows, warn);
      }
      return osCard(ctx, p, "", "");
    })
    .join("\n");
  const fpr = signing.gpgFingerprint.replace(/(.{4})(?!$)/g, "$1 ");
  const bullets = data.whatsNew.map((k) => `<li>${esc(t(k))}</li>`).join("");
  const news = `<div class="dl-new" id="whats-new">
<h2 class="h2">${esc(t("new.title").replace("{version}", rel.version))}</h2>
<p class="small">${esc(t("new.meta").replace("{date}", fmtDate(lang, rel.date)))}</p>
<ul class="dl-new__list detail">${bullets}</ul>
<p class="small">${esc(t("new.note"))}</p>
</div>`;
  return `<section class="sec sec--first" id="download" aria-labelledby="download-h">
<div class="wrap sec__grid">
${rail(t("downloads.label"), t("dl.rail"))}
<div class="content content--stack-sm">
<h1 class="display" id="download-h">${esc(t("dl.headline"))}</h1>
<p class="lead max640">${esc(t("dl.body"))}</p>
<p class="detail max640">${esc(t("downloads.body"))}</p>
<p class="detail max640">${esc(t("dl.updates"))}</p>
${news}
<ul class="dloss">${cards}</ul>
<div class="dl-info">
<p class="dl-terms">${esc(t("downloads.terms"))} <a class="ul" href="${licencePath(lang)}">${esc(t("downloads.terms.link"))}</a></p>
<h2 class="h3">${esc(t("dl.keys.title"))}</h2>
<p class="small">${esc(t("dl.keys.body"))}</p>
<p class="small"><span class="mono-label">${esc(t("dl.keys.fpr"))}</span> <code class="dl-fpr">${fpr}</code></p>
<ul class="dl-keys small">
<li><a class="ul" href="/keys/dentalcraft.gpg">${esc(t("dl.keys.gpg"))}</a></li>
<li><a class="ul" href="/keys/dentalcraft.minisign.pub">${esc(t("dl.keys.minisign"))}</a></li>
<li><a class="ul" href="/download/${rel.sums}">${esc(t("downloads.sums.link"))}</a></li>
</ul>
</div>
<p class="disc disc--sm">${esc(t("disclaimer.full"))}</p>
</div>
</div>
</section>`;
}

export function downloadPage(ctx) {
  return shell(ctx, "download", downloadBody(ctx));
}

// ---------- About ----------

function technology(ctx) {
  const { t } = ctx;
  const items = [1, 2, 3, 4, 5, 6, 7, 8]
    .map(
      (n) =>
        `<li class="tech"><h3 class="h3">${esc(t(`technology.i${n}.title`))}</h3><p class="sec-text sec-text--sm">${esc(t(`technology.i${n}.body`))}</p></li>`,
    )
    .join("");
  return `<section class="sec sec--first" id="technology" aria-labelledby="technology-h">
<div class="wrap sec__grid">
${rail(t("technology.label"), t("technology.rail"))}
<div class="content content--stack-sm">
<h1 class="display" id="technology-h">${esc(t("technology.headline"))}</h1>
<p class="lead">${esc(t("technology.body"))}</p>
<ul class="techs">${items}</ul>
<p class="small">${esc(t("technology.microcopy"))}</p>
</div>
</div>
</section>`;
}

function regulatory(ctx) {
  const { t } = ctx;
  return `<section class="sec sec--panel" id="regulatory" aria-labelledby="regulatory-h">
<div class="wrap sec__grid">
${rail(t("regulatory.label"), t("regulatory.rail"))}
<div class="content content--stack-sm">
<h2 class="h1" id="regulatory-h">${esc(t("regulatory.headline"))}</h2>
<p class="callout">${esc(t("regulatory.callout"))}</p>
<p class="lead lead--primary max640">${esc(t("regulatory.body.1"))}</p>
<p class="lead max640">${esc(t("regulatory.body.2"))}</p>
</div>
</div>
</section>`;
}

function faq(ctx) {
  const { t } = ctx;
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    .map(
      (n) =>
        `<details class="faq"${n === 1 ? " open" : ""}><summary><h3 class="h3">${esc(t(`faq.q${n}`))}</h3><span class="faq__tog">${ICON.plus}${ICON.minus}</span></summary><div class="faq__a"><p class="sec-text">${esc(t(`faq.a${n}`))}</p></div></details>`,
    )
    .join("");
  return `<section class="sec" id="faq" aria-labelledby="faq-h">
<div class="wrap sec__grid">
${rail(t("faq.label"), "")}
<div class="content content--stack-sm">
<h2 class="h1" id="faq-h">${esc(t("faq.headline"))}</h2>
<div class="faqs">${items}</div>
</div>
</div>
</section>`;
}

function contact(ctx) {
  const { t } = ctx;
  const mail = t("contact.email");
  return `<section class="sec sec--panel" id="contact" aria-labelledby="contact-h">
<div class="wrap sec__grid">
${rail(t("contact.label"), "")}
<div class="content contact">
<h2 class="h1 contact__mail" id="contact-h"><a href="mailto:${esc(mail)}">${esc(mail)}</a></h2>
<a class="btn btn--secondary" href="mailto:${esc(mail)}">${esc(t("contact.button"))}</a>
</div>
</div>
</section>`;
}

function privacy(ctx) {
  const { t } = ctx;
  return `<section class="sec" id="privacy" aria-labelledby="privacy-h">
<div class="wrap sec__grid">
${rail(t("privacy.label"), t("privacy.rail"))}
<div class="content content--stack-sm">
<h2 class="h2" id="privacy-h">${esc(t("privacy.headline"))}</h2>
<p class="sec-text max640">${esc(t("privacy.body.1"))}</p>
<p class="sec-text max640">${esc(t("privacy.body.2"))}</p>
<h3 class="h3">${esc(t("privacy.app.title"))}</h3>
<p class="sec-text max640">${esc(t("privacy.app.1"))}</p>
<p class="sec-text max640">${esc(t("privacy.app.2"))}</p>
<p class="sec-text max640">${esc(t("privacy.app.3"))}</p>
<p class="sec-text max640">${esc(t("privacy.app.4"))}</p>
</div>
</div>
</section>`;
}

// Source licence: the code is public on GitHub, PolyForm Noncommercial; the licence texts of the bundled fonts.
function sourceLicence(ctx) {
  const { t, asset, data } = ctx;
  const fonts = [
    ["fonts/OFL-AtkinsonHyperlegibleNext.txt", "srclicence.fonts.atkinson"],
    ["fonts/OFL-B612Mono.txt", "srclicence.fonts.b612"],
  ];
  return `<section class="sec" id="source-licence" aria-labelledby="source-licence-h">
<div class="wrap sec__grid">
${rail(t("srclicence.label"), t("srclicence.rail"))}
<div class="content content--stack-sm">
<h2 class="h2" id="source-licence-h">${esc(t("srclicence.headline"))}</h2>
<p class="sec-text max640">${esc(t("srclicence.body.1"))}</p>
<p class="sec-text max640">${inline(t("srclicence.body.2"))}</p>
<p class="sec-text max640">${esc(t("srclicence.body.3"))}</p>
<p class="sec-text max640"><a class="ul" href="${esc(data.links.github)}" rel="noopener">${esc(t("srclicence.github"))}</a></p>
<p class="sec-text max640">${esc(t("srclicence.fonts"))}</p>
<ul class="eula__list">${fonts.map(([name, key]) => `<li><a class="ul" href="${asset(name)}">${esc(t(key))}</a></li>`).join("")}</ul>
</div>
</div>
</section>`;
}

export function aboutPage(ctx) {
  const body = [technology(ctx), regulatory(ctx), faq(ctx), sourceLicence(ctx), contact(ctx), privacy(ctx)].join("\n");
  return shell(ctx, "about", body);
}

// ---------- Licence ----------

// Inline text: escape, then link e-mail addresses.
const inline = (s) => esc(s).replace(/[\w.+-]+@[\w-]+(?:\.[\w-]+)+/g, (m) => `<a class="ul" href="mailto:${m}">${m}</a>`);

// content/licence.md is the PolyForm Noncommercial License 1.0.0, byte for byte the same file as LICENSE.md
// ("Required Notice:" line, "# " title, "<url>", "## " clauses, paragraphs, "> " example, **bold** and [text](#clause) links).
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
function mdInline(s) {
  return esc(s)
    .replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\[([^\]]+)\]\(#([a-z-]+)\)/g, '<a class="ul" href="#$2">$1</a>')
    .replace(/&lt;(https?:\/\/[^&\s]+?)&gt;/g, '<a class="ul" href="$1" rel="noopener">$1</a>');
}
function renderLicence(md) {
  const out = [];
  let title = "";
  for (const raw of md.split("\n")) {
    const line = raw.trim();
    if (!line) continue;
    if (line.startsWith("## ")) out.push(`<h3 class="h3 eula__h" id="${slug(line.slice(3))}">${mdInline(line.slice(3))}</h3>`);
    else if (line.startsWith("# ")) title = line.slice(2);
    else if (line.startsWith("> ")) out.push(`<blockquote class="eula__quote">${mdInline(line.slice(2))}</blockquote>`);
    else out.push(`<p class="sec-text">${mdInline(line)}</p>`);
  }
  if (!title) throw new Error("content/licence.md: no title line");
  return { title, html: out.join("\n") };
}

function licenceBody(ctx) {
  const { t } = ctx;
  const { title, html } = renderLicence(ctx.licenceMd);
  return `<section class="sec sec--first" id="licence" aria-labelledby="licence-h">
<div class="wrap sec__grid">
${rail(t("licence.label"), t("licence.rail"))}
<div class="content content--stack-sm eula">
<h1 class="display" id="licence-h">${esc(t("licence.headline"))}</h1>
<p class="sec-text">${esc(t("licence.summary.1"))}</p>
<p class="sec-text">${inline(t("licence.summary.2"))}</p>
<p class="sec-text">${esc(t("licence.summary.3"))}</p>
<p class="eula__note">${esc(t("licence.note"))}</p>
<h2 class="h2" id="licence-text" lang="en">${esc(title)}</h2>
<div class="eula__body" lang="en">
${html}
</div>
</div>
</div>
</section>`;
}

export function licencePage(ctx) {
  return shell(ctx, "licence", licenceBody(ctx));
}

// ---------- root index, 404 ----------

export function indexPage(ctx) {
  const { siteUrl } = ctx;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>DentalCraft</title>
<meta name="robots" content="noindex, follow">
<meta name="color-scheme" content="dark">
<link rel="canonical" href="${siteUrl}/en/">
<link rel="alternate" hreflang="en" href="${siteUrl}/en/">
<link rel="alternate" hreflang="it" href="${siteUrl}/it/">
<link rel="alternate" hreflang="x-default" href="${siteUrl}/">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<noscript><meta http-equiv="refresh" content="0; url=/en/"></noscript>
<link rel="stylesheet" href="${ctx.css}">
<script src="${ctx.redirectJs}"></script>
</head>
<body class="plain">
<main class="plain__in">
<p class="plain__brand"><img src="${ctx.asset("brand/svg/dentalcraft-lockup-horizontal-dark.svg")}" alt="DentalCraft" width="168" height="30"></p>
<p><a class="ul" href="/en/" hreflang="en" lang="en">English</a> · <a class="ul" href="/it/" hreflang="it" lang="it">Italiano</a></p>
</main>
</body>
</html>
`;
}

export function notFoundPage(ctx) {
  const row = (lang, t) =>
    `<section lang="${lang}"><h1 class="h1">${esc(t("notfound.headline"))}</h1><p class="sec-text">${esc(t("notfound.body"))}</p><p><a class="ul" href="/${lang}/">${esc(t("notfound.link"))}</a></p></section>`;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(ctx.tEn("meta.notfound.title"))}</title>
<meta name="robots" content="noindex">
<meta name="color-scheme" content="dark">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="${ctx.css}">
</head>
<body class="plain">
<main class="plain__in">
<p class="plain__brand"><img src="${ctx.asset("brand/svg/dentalcraft-lockup-horizontal-dark.svg")}" alt="DentalCraft" width="168" height="30"></p>
${row("en", ctx.tEn)}
${row("it", ctx.tIt)}
</main>
</body>
</html>
`;
}

export { LANGS };
