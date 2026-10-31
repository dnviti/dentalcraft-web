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
  const rel = page === "about" ? "about/" : "";
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
<a class="ul" href="${sectionHref(ctx, page, "about", "privacy")}">${esc(t("footer.privacy"))}</a>
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
  const key = page === "about" ? "about" : "home";
  const title = t(`meta.${key}.title`);
  const desc = t(`meta.${key}.description`);
  const rel = page === "about" ? "about/" : "";
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
<p>${statusTag(ctx, "progress")}<span class="small">${esc(t("aligners.legend.inprogress"))}</span></p>
<p>${statusTag(ctx, "planned")}<span class="small">${esc(t("aligners.legend.planned"))}</span></p>
</div>
<ol class="stages">${rows}</ol>
</div>
</div>
</section>`;
}

function downloads(ctx) {
  const { t, data } = ctx;
  const cards = data.platforms
    .map(
      (p) =>
        `<li class="pcard"><div class="pcard__handle"><span class="pcard__code" aria-hidden="true">${p.code}</span>${tag(ctx, "planned", t(p.tag))}</div><div class="pcard__body"><h3 class="h2">${esc(t(`downloads.platform.${p.id}`))}</h3><button class="btn btn--disabled" type="button" aria-disabled="true">${ICON.lock}<span>${esc(t("downloads.button"))}</span></button></div></li>`,
    )
    .join("");
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

// ---------- About ----------

function technology(ctx) {
  const { t } = ctx;
  const items = [1, 2, 3, 4, 5, 6]
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
  const items = [1, 2, 3, 4, 5, 6, 7, 8]
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
</div>
</div>
</section>`;
}

export function aboutPage(ctx) {
  const body = [technology(ctx), regulatory(ctx), faq(ctx), contact(ctx), privacy(ctx)].join("\n");
  return shell(ctx, "about", body);
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
