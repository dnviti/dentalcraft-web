# DentalCraft website: implementation spec (v1, 2026-10-31)

Static HTML/CSS site, bilingual (EN/IT), dark only. This spec is written to be implemented without opening FigCraft. When a value here and the design file disagree, the design file wins. Tell the designer about it.

- Design file: `design/dentalcraft-web.figcraft`. Pages: **Components** (component sets, art, logos) and **Screens**.
- Screens, all on page *Screens*:
  - `Home / Desktop 1440 / EN`, frame id 329
  - `Home / Desktop 1440 / IT`, id 1325
  - `Home / Mobile 390 / EN`, id 882
  - `Home / Mobile 390 / IT`, id 1987
  - `About / Desktop 1440 / EN`, id 1821
- Reference PNGs: `design/screens/`: `home-desktop-1440-en.png`, `home-desktop-1440-it.png`, `home-mobile-390-en.png`, `home-mobile-390-it.png`, `about-desktop-1440-en.png`, `components-sheet.png`.
- Tokens: `design/web-tokens.json`. Copy: `content/site-copy.en.md`, `content/site-copy.it.md`. Brand: `brand/`.

## 1. Design idea (why it looks like this)

The brand mark is a dental arch with its offset shell, and the gap between them is the clearance. The site works like a shade guide on a lab bench:

- **Graphite and enamel** cover almost everything. **Curing amber** marks the single action in a viewport: the primary button or the video play button. The arch line in the art is also amber.
- The **hero art** is the mark's construction drawn as a technical illustration: a real upper arch in occlusal view, with FDI numbers, the shell offset around the teeth, and callouts for spine, shell and clearance.
- **Status has a shape**, used in the same way on every section:
  - solid filled dot = *Exists today*
  - half-filled dot = *In progress*
  - dashed ring = *Planned*

  Dashed outlines mean "intent / not started" everywhere: Planned tags, the "intent" banners, and the video placeholder.
- The **shade-tab shape** (radii 16/16/4/4, dark handle band with a mono code) is kept for module tabs and platform cards. Everything else uses 4 px radii.
- An editorial **label rail** runs on the left of each section, 3 of 12 columns. It holds a mono label and a secondary sub-label under a 1 px enamel rule. The content sits in the other 9 columns.

## 2. Global layout

| | Mobile < 768 | Tablet 768 to 1199 | Desktop >= 1200 |
|---|---|---|---|
| Design frame | 390 | (interpolate) | 1440 |
| Side gutter | 16 | 40 | 80 |
| Grid | 1 col | 1 col, rail stacked above the content | 12 col, max content 1280, gutter 24. Rail = cols 1-3 (302), content = cols 4-12 (954) |
| Section padding (top/bottom) | 64 | 88 | 112 |
| Header | 64 high: lockup, language switch, menu button | 64: same as mobile | 72: lockup, 8 nav links, language switch, "Follow the development" |

- `body { background: var(--color-bg-canvas); color: var(--color-text-primary); font: 400 17px/26px var(--font-sans); }`
- Load the fonts with the URL from `web-tokens.json → font.import` (`display=swap`). Self-hosting is also fine.
- The header and the disclaimer band together form one `position: sticky; top: 0` block (z-index above the content). The header background is solid canvas, not translucent.
- Anchor targets get `scroll-margin-top` equal to the sticky block height: 112 desktop, about 108 mobile (the band wraps to 2 lines).
- Section backgrounds alternate: canvas, panel, canvas, panel... The order is in §5.
- No shadows anywhere. Do not use gradients either, except inside the poster image if a real one replaces it.

## 3. URLs, language, metadata

- `/en/` and `/it/`: two static copies of each page. `/` redirects to `/en/`. Optionally use `Accept-Language`, but never auto-redirect after the first visit.
- About page: `/en/about/` and `/it/about/`. This page holds the Technology, Regulatory, FAQ and Contact sections. The home nav links "Technology", "Regulatory" and "FAQ" point to the anchors `#technology`, `#regulatory` and `#faq` there.
- `<html lang="en">` or `lang="it"`. Add `<link rel="alternate" hreflang="en|it|x-default">`.
- The language switch links to the same page in the other language. It keeps the hash.
- `<title>` and the meta description come from the copy files, section *SEO / Open Graph*. OG image: `brand/og/og-image.png` (1200×630). The favicon set is in `brand/favicon/`; the brand guidelines §7 give the HTML head snippet.

## 4. Components

Each component maps to a FigCraft component set on the *Components* page. Every state listed is drawn there.

### 4.1 Button (`Button`, variants Primary / Secondary × Default, Hover, Pressed, Focus, Disabled)

- Height 48. Padding 0 24 (Primary with icon: 0 24 0 20). Gap 10. Radius 4. Text `button` style (16/20, 700).
- **Primary**:
  - Default: fill `--color-accent-amber`, text and icon `--color-accent-on-amber`.
  - Hover: `amber-hover`.
  - Pressed: `amber-pressed`.
  - Focus: 2 px `--color-focus-ring` outline with a 2 px offset.
- **Secondary**:
  - Default: transparent, 1.5 px inside border `--color-line-strong`, text primary.
  - Hover: fill `--color-bg-hover`, border text/secondary.
  - Pressed: fill raised, border text/primary.
  - Focus: same as Primary.
- **Disabled**: fill raised, 1 px border line/subtle, text and icon `--color-text-disabled`, 12×15 lock icon. Use `aria-disabled="true"` on a `<button type="button">` (not `disabled`) so that screen readers still announce "Not available yet". Cursor: default.
- Icons: play triangle 12×14 (Primary "Watch the presentation") and lock 12×15 (Disabled). Inline SVG with `aria-hidden="true"`.
- Mobile: buttons in the hero and in the form are full width (`width: 100%`, centred content).
- Transition: background-color and border-color, 120 ms.

### 4.2 Status tag (`Status tag`: Exists today / In progress / Planned)

- Height 28. Padding 0 10. Gap 8. Radius 4. Label `mono-label` (13/18, +0.04em, uppercase through CSS).
- Exists today: solid 1 px `line-strong` border, filled 10 px enamel dot, primary text.
- In progress: solid 1 px `text-secondary` border, 10 px ring (1.5 px) with the left half filled, primary text.
- Planned: dashed 1 px `line-strong` border (dash 3 3), dashed 10 px ring in text/secondary, secondary text.
- Markers are inline SVG with `aria-hidden`. The word carries the meaning.
- The same component is reused with other labels:
  - "In development" in the hero badge (In progress style)
  - "Work in progress" on screenshots (In progress style, sunken fill)
  - "Coming soon" / "Later" on platform cards (Planned style)

### 4.3 Nav link (`Nav link`: Default / Hover / Current / Focus)

- Height 44 (hit area). Padding 0 8. Text `small` (14/20, 500).
- Default: text/secondary.
- Hover: text/primary with a 1 px underline, offset 4.
- Current: text/primary with a 2 px enamel bottom border, plus `aria-current="page"` for a page, or `"true"` while scrolling through sections. Use an IntersectionObserver to set Current on the section in view. Without JS, nothing is Current on Home.
- Focus: 2 px focus ring inside, radius 4.
- Footer links use the same component with padding 0 and height 36 (desktop) or 44 (mobile).

### 4.4 Language switch (`Language switch`: Lang=EN / Lang=IT)

- Height 44. 1 px `line-strong` border, radius 4, padding 3, gap 2.
- Two 40×38 segments. The active segment has a raised fill, radius 2, and B612 Mono Bold 13 in primary. The inactive one is B612 Mono Regular 13 in secondary.
- Markup: `<nav aria-label="Language">` with two links. The active one has `aria-current="true"` and `lang` attributes (`lang="it"` on "IT"). Accessible names: "English" and "Italiano" (visually hidden).

### 4.5 Email field (`Email field`: Default / Focus / Error / Success / Disabled)

- Label (`small`, primary) above, 8 px gap.
- Input: 48 high, padding 0 16, fill sunken, 1.5 px `line-strong` border, radius 4, text `body`. The placeholder is text/secondary.
- Focus: 2 px focus-ring border.
- Error: 2 px `--color-status-danger` border, then a message row below (16 px circle-exclamation icon plus text in danger, `small`). The input gets `aria-invalid="true"` and `aria-describedby` pointing to the message.
- Success: neutral border, then a message row with a check icon and text in `--color-status-success`. Announce it through `role="status"`.
- Disabled: panel fill, subtle border, disabled text.
- Validation runs on submit only (not while typing), using `type="email"` plus a JS check. There is no back end yet (see §8). Until one exists, the form may post to a mailto or show Success locally. Do not fake a subscription.

### 4.6 Video player (`Video player`: Poster / Placeholder / Playing)

- 16:9 box: 954×537 on desktop, full width on mobile (358×201 at 390). Fill sunken, 1 px subtle border, radius 4, padding 32 (16 on mobile), `overflow: hidden`.
- **Poster** (video ready):
  - Top row: mono kicker "DentalCraft / Presentation" on the left, duration "01:15" on the right, both secondary.
  - Centre: the brand mark (`brand/svg/dentalcraft-mark-dark.svg`, 123 px tall) and the title "A dental CAD, built native." (H1). The title is hidden on mobile, and the mark shrinks to 64 px there.
  - Bottom row: a 64×64 amber play button (radius 4, on-amber triangle), then "Play video" (H3) and the meta line (`small`, secondary). The meta line is hidden on mobile.
  - The whole poster is one `<button>` with `aria-label` = copy *Video slot alt/aria-label*.
  - The poster can later be replaced by a real frame grab `media/presentation-poster.jpg` (1920×1080), with the same overlay.
- **Playing**: a native `<video controls preload="none" playsinline>` with `<track kind="subtitles" srclang="it" default>` on the EN page (the brief: English on-screen text with Italian subtitles), and `srclang="en"` on the IT page if an EN track exists.
  - The custom control bar in the design is the target look: 44 px buttons (pause, CC, fullscreen) with 1 px line-strong borders, mono time readouts, a 4 px line-strong track with an enamel progress fill and a 4×18 handle.
  - Native controls are acceptable in v1.
  - Never autoplay. Respect `prefers-reduced-motion`.
- **Placeholder** (no video file yet; the **current default**):
  - Same box with a dashed 1 px line-strong border (6 6).
  - The mark at 35 % opacity.
  - A dashed 64×64 square with a grey triangle instead of the amber button.
  - Title "Video coming soon".
  - This state is not interactive: render a `<div role="img" aria-label="…">`, not a button.
- Below the player: a caption row with the caption (`small`, secondary, max 620) and a "Read the transcript" link (`small`, primary, underline offset 3). The link goes to `/en/transcript/`, generated from `content/video-script.md`, or to a `<details>` block.

### 4.7 Platform card (`Platform card`)

- Width 302 on desktop (3 cards in 954 with 24 gaps), full width on mobile. Radius 16 16 4 4, raised fill, overflow hidden.
- Handle band: 56 high, sunken fill, padding 0 20, space-between. On the left the code in B612 Mono Bold 20/24, secondary: `LNX`, `WIN`, `MAC`. These are decorative and get `aria-hidden`. On the right a Planned-style tag: "Coming soon" or "Later".
- Body: padding 24 20 20, gap 20. Platform name (H2), then the Disabled button "Not available yet" at full width.
- No hover state: the card is not interactive.

### 4.8 Ledger row (`Ledger row`) and Stage row (`Stage row`, `Stage row / Mobile`)

- **Ledger row**: min-height 60, space-between. Item (`body`, primary) on the left, status tag on the right, 1 px subtle bottom border. On mobile the item wraps and the row grows (`align-items: center`). Markup: a `<ul>` of `<li>`.
- **Stage row, desktop**: a horizontal row with padding 20 0 and a subtle bottom border. Its cells:
  - Marker cell, 16 wide: a 14 px ring. In progress: enamel ring with the left half filled. Planned: a dashed ring in secondary. Both have a panel fill.
  - Group name: H3, width 220.
  - Detail column (fill): microcopy in `body` primary, then the stage list in 15/22 secondary.
  - Status tag, right-aligned.

  Use an ordered list (`<ol>`): the stages are a real sequence.
- **Stage row, mobile**: vertical. The head row holds the marker, the group name and the tag. The microcopy and the stage list sit below. Padding 18 0.

### 4.9 FAQ item (`FAQ item`: Closed / Open / Focus)

- Top border 1 px subtle. The header is a full-width button: question (H3) on the left, a 44×44 toggle square on the right (1 px line-strong border, radius 4, 14 px plus or minus at 1.5 px).
  - Open: the toggle has a raised fill, and the answer (`body`, secondary, max 720) shows with 24 px bottom padding.
  - Focus: the header gets a panel fill, a 2 px focus ring and 8 px side padding.
- Use `<details>/<summary>`, or a button with `aria-expanded`/`aria-controls`. The first item is open by default. Height transition 200 ms (none with reduced motion).

### 4.10 Other fixed parts

- **Disclaimer band**:
  - Sunken fill, 40 high on desktop, auto height on mobile (padding 10 16), 1 px subtle bottom border.
  - Content: an In-progress marker, then the text in `mono-label` primary.
    - EN: "In development · Not a medical device · Not for clinical use"
    - IT: "In sviluppo · Non è un dispositivo medico · Non per uso clinico"
  - Desktop only: a right-aligned link "Regulatory stance" / "Posizione normativa" (`small`, secondary, underlined) to the About `#regulatory` anchor.
  - The band is never dismissible.
- **Disclaimer box** (repeated in the hero, Downloads and the footer): sunken fill, 3 px text/secondary left border, radius 4, padding 14 16. The text is the full copy sentence in `body` 700 (hero) or `small` 700 (Downloads).
  - The footer version is a full-width strip between 1 px subtle rules, in `body` 700.
  - The Regulatory callout on About is bigger: 4 px enamel left border, padding 24 28, H2 700.
- **Intent banner**: hug width on desktop, full width on mobile. 1 px dashed line-strong border (4 4), radius 4, padding 12 16, dashed 10 px marker, text `small` primary.
- **Rail**: 1 px enamel top rule, padding-top 16, label in `mono-label` primary, sub-label in `mono-label` secondary, gap 8.
  - Desktop: a 302 px column; `position: sticky; top: 136px` inside its section is optional.
  - Mobile: the rail is a single row with the label on the left and the sub-label on the right (padding-top 12).
- **Menu button** (mobile and tablet): 44×44, 1 px line-strong border, radius 4, three 18×1.5 enamel bars.
  - It opens a full-height sheet below the sticky block: canvas fill, nav links at 44 px rows, then "Follow the development" (Secondary, full width).
  - The sheet sets `aria-expanded` on the button, traps focus and closes on Escape.
  - The open sheet is not drawn in the design file. Build it from these tokens.

## 5. Home page, section by section

Copy keys are the layer names in FigCraft. They are listed with the copy-file section they come from. The IT text is the same key in `site-copy.it.md`. Keys marked **(new)** are not in the copy files yet; their EN/IT text is given here and should be added to the copy files.

### 5.1 Header (canvas, sticky)

- Desktop:
  - Lockup `brand/svg/dentalcraft-lockup-horizontal-dark.svg` at 168×30, linking to the home page.
  - Nav (gap 8): `nav.presentation`, `nav.vision`, `nav.aligners`, `nav.roadmap`, `nav.technology`, `nav.regulatory`, `nav.downloads`, `nav.faq` (copy *Navigation*).
  - Actions (gap 16): the language switch, then a Secondary button `header.cta` ("Follow the development"), which jumps to `#downloads` (the notify form).
- Mobile: the lockup scaled to 143×26, then the language switch, then the menu button (gap 8).

### 5.2 Disclaimer band (sunken, sticky with the header)

- `disclaimer.band` (new; the copy's *Mandatory disclaimer* with middle dots) and `disclaimer.link` (new): "Regulatory stance" / "Posizione normativa".

### 5.3 Hero (canvas), `#top`

- **Desktop**: 2 columns. Copy column 616 wide, left padding 80; art column 720 wide, flush to the right edge of the viewport (it bleeds when the window is wider than 1440: anchor it right). Vertical padding 40, items centred. Copy column, vertical, gap 28:
  1. Status tag `hero.badge` (In progress style): "In development".
  2. `hero.headline`, `hero` style (64/68, 700, -2%), width 616. It wraps to 3 lines in EN and 3 in IT.
  3. `hero.subhead`, `lead` style, secondary, max 560.
  4. CTA row, gap 16: Primary `hero.cta.primary` ("Watch the presentation") links to `#video`; Secondary `hero.cta.secondary` links to `#downloads`.
  5. Disclaimer box `disclaimer.full` (copy *Disclaimer line*), full column width.
  6. `hero.microcopy`, `small`, secondary.
- **Art**: `design/assets/hero-arch.svg` (720×700, exported from component `Art/Hero arch`).
  - The labels are live `<text>` in B612 Mono. Translate them per language:

    | EN | IT |
    |---|---|
    | SHELL = ARCH + OFFSET | SHELL = ARCATA + OFFSET |
    | ARCH SPINE | LINEA DELL'ARCATA |
    | CLEARANCE | CLEARANCE |
    | ILLUSTRATION / UPPER ARCH, FDI | ILLUSTRAZIONE / ARCATA SUPERIORE, FDI |

  - Inline the SVG, or use `<img>` with `alt` = `hero.art.alt` (copy *Hero visual alt*).
  - Below 768 the art is scaled to the full content width (358×348). Its 6 px labels are decorative there, so `aria-hidden` on the text is fine as long as the `alt` stays.
- **Mobile**: one column, padding 32 16 24, gap 24, in the order badge, headline (40/44), subhead (`body`), CTAs stacked full width (gap 12), disclaimer box, microcopy, art.
- **Tablet**: the art goes under the copy at max 560 wide, centred. The headline is 56/60.

### 5.4 Presentation (panel), `#presentation`

- Rail: `presentation.label` ("Presentation"), sub-label `presentation.rail` (new): "What exists today" / "Cosa esiste oggi".
- Content column, gap 80. Three blocks follow.

**a) Intro** (desktop: 2 columns, gap 48):
- Left (470): `presentation.headline` (H1), then `presentation.body.1` and `presentation.body.2` (`body`, secondary, gap 20).
- Right (fill): the status ledger. Heading `presentation.status.title` (new): "Status, today" / "Stato, oggi", in `mono-label` secondary. Then 5 ledger rows from copy *Status list*:

  | Row | Status |
  |---|---|
  | Application shell | Exists today |
  | Project format (.dcprj) | Exists today |
  | GPU 3D viewport | Exists today |
  | Scan import | Exists today |
  | Clinical algorithms | **In progress** |

  The copy's parenthetical "(being ported and validated)" is already in body.2, so the row shows only the item name.
- Mobile: all of it in one column.

**b) Video**, `id="video"`:
- `video.heading` (H2; 24/30 on mobile), then the Video player (Placeholder until the file exists, then Poster), then the caption row: `video.caption` and `video.transcript`.
- The player's texts:

  | Key | Use | EN | IT |
  |---|---|---|---|
  | `video.kicker` (new) | top row | "DentalCraft / Presentation" | "DentalCraft / Presentazione" |
  | `video.poster.title` (new) | poster centre | "A dental CAD, built native." | "Un CAD odontoiatrico, costruito nativo." (from the video script, scene 2) |
  | `video.play` | button title | copy *Play button label* | |
  | `video.meta` (new) | meta line | "About 75 seconds. English text, Italian subtitles." | "Circa 75 secondi. Testi in inglese, sottotitoli in italiano." |
  | `video.placeholder` | placeholder title | copy *Placeholder* | |
  | `video.aria` | aria-label | copy *Video slot alt/aria-label* | |

**c) Screenshots**:
- Heading row: `screens.heading` (H2) on the left, `screens.note` (`small`, secondary) on the right, baseline-aligned. On mobile the note sits under the heading.
- Two figures, each 465 wide (full width and stacked on mobile), gap 24.
- Each figure is a 16:9 frame (465×262) with radius 4, a 1 px subtle border and `object-fit: cover; object-position: top left`. A "Work in progress" tag (`screens.badge`, sunken fill) sits 12 px from the top-left corner. Below it, 12 px gap, the caption `screens.N.caption` (`small`, secondary). `alt` = `screens.N.alt`.
- Images:
  1. `docs/screenshots/home-en.png`, or `home-it.png` on the IT page.
  2. Aligners workspace: no real capture exists yet. The design uses the mock `docs/design/screens/05-aligners-workspace.png` (IT: `05-aligners-workspace-it.png`) as a stand-in. Replace it with a real capture before launch (§8).
- Export as WebP/AVIF at 960 wide plus 1920 wide (`srcset`), with `loading="lazy"`.

### 5.5 Vision (canvas), `#vision`

- Rail: `vision.label`, sub-label `vision.rail` (new): "Intent, not features" / "Intenzioni, non funzioni".
- Content: `vision.headline` (H1), `vision.body` (`lead`, secondary, max 640), intent banner `vision.banner`.
- Principles grid, **full 1280 width** (it breaks out of the rail; the 4 columns line up with the rail column):
  - 4 columns × 2 rows, gap 24/40. Each cell: a 1 px dashed line-strong top rule (dash 4 4: these are intentions), padding-top 20, gap 10. Then `vision.pN.title` (H3) and `vision.pN.body` (15/22, secondary), for N = 1 to 8 in copy order.
  - Tablet: 2 columns. Mobile: a single list, cells with padding 16 0 20 and gap 6.
- `vision.microcopy` (`small`, secondary) below the grid.

### 5.6 Modules (panel): Roadmap `#roadmap` and Aligners `#aligners`

**a) Roadmap**:
- Rail: `roadmap.label`, sub-label `roadmap.rail` (new): "No dates announced" / "Nessuna data annunciata".
- Content: `roadmap.headline` (H1), `roadmap.body` (`lead`, secondary, max 640).
- **Shade guide** (padding-top 36), built as a `<ul>` of five modules in this order:

  | Module | Status | Tab | Name EN / IT |
  |---|---|---|---|
  | Aligners | In progress | AL | Aligners / Allineatori |
  | Model Builder | Planned | MB | Model Builder |
  | Splint | Planned | SP | Splint / Splint (bite) |
  | Crown & Bridge | Planned | CB | Crown & Bridge / Corone e ponti |
  | Implant | Planned | IM | Implant / Implantologia |

  1. Tabs row (gap 24, bottom-aligned): `brand/svg/module-{al,mb,sp,cb,im}-tab-dark.svg` at 168×202 (1.4×). AL sits in a slot with 28 px bottom padding, so it is **raised**: lifted out of the guide. The four Planned tabs have `opacity: .55`. Tabs are decorative (`alt=""`): the names below carry the meaning.
  2. Core plate under the tabs: full width, 56 high, sunken fill, 1 px subtle border, radius 0 0 4 4. It holds `roadmap.core.label` (new): "Core" / "Nucleo", in `mono-code` primary; then `roadmap.core.items` (new): "Application shell, project format (.dcprj), GPU 3D viewport, scan import" / "Struttura dell'applicazione, formato di progetto (.dcprj), viewport 3D su GPU, importazione delle scansioni" (`small`, secondary).
  3. Labels row (padding-top 20, gap 24, columns 168): `roadmap.mN.name` (H3) and the status tag. Aligners uses In progress plus `roadmap.m1.note` ("First module. In active development.", `small`, secondary). The others use Planned.
- `roadmap.microcopy` (`small`, secondary).
- Mobile:
  - The guide becomes a horizontal scroller that bleeds to the right edge: `overflow-x: auto; scroll-snap-type: x mandatory`, with `role="region"`, `aria-label` = `roadmap.alt`, and `tabindex="0"`.
  - Columns are 144 wide, gap 16, with tabs at 1× (120×144). The Planned columns get 20 px top padding, so AL reads as raised. Name (17/22, 600) and tag sit under each tab.
  - The core plate goes under the scroller as a stacked box.

**b) Aligners** (112 px below the roadmap on desktop, 36 px spacer on mobile):
- Rail: `aligners.label` ("Aligners", taken from the copy's "Aligners - first module"), sub-label `aligners.rail` (new): "First module" / "Primo modulo".
- Content, gap 20:
  - `aligners.headline` (H1).
  - `aligners.body` (`lead`, secondary).
  - Intent banner `aligners.banner` (copy *Label banner*).
  - Legend row (gap 32): the In progress tag plus `aligners.legend.inprogress` (new, from copy *Legend*): "Being ported or validated." / "Porting o validazione in atto."; then the Planned tag plus `aligners.legend.planned` (new): "Not started." / "Non ancora avviato." On mobile the two pairs stack.
- Stage table (`<ol>`, 1 px subtle top border), 8 Stage rows in copy order. Per the brief, **only "Case" is In progress; every other group is Planned.** This overrides the copy file's table, which proposes In progress for Preparation, Diagnosis and Planning (§8).

  | # | Group (`aligners.sN.group`) | Microcopy (`aligners.sN.micro`) | Stages (`aligners.sN.stages`) | Status |
  |---|---|---|---|---|
  | 1 | Case | Start from the scan. | Import intraoral scans (STL, OBJ, PLY) | In progress |
  | 2 | Preparation | Make the data ready to plan. | Orientation and arch; FDI tooth numbering; segmentation; tooth reconstruction and gingiva | Planned |
  | 3 | Diagnosis | Measure before moving. | Space analysis; Little irregularity index; Bolton analysis | Planned |
  | 4 | Planning | Define the target and the steps. | Setup of the final position; staging per aligner with per-tooth movement limits; IPR; attachments | Planned |
  | 5 | Occlusion | Check how the arches meet. | Occlusion and bite, including bite with aligners | Planned |
  | 6 | Aligner production | Prepare the shell for printing. | Aligner shell with thickness and clearance; trim line; identification stamp; print check | Planned |
  | 7 | Follow-up | Compare plan and progress. | Follow-up visits | Planned |
  | 8 | Output | Files and reports. | STL export per stage; reports | Planned |

  Keep the per-row status in a single data source (a JSON or front-matter array), so that changing one status updates the EN and IT pages together.

### 5.7 Downloads (canvas), `#downloads`

- Rail: `downloads.label`, sub-label `downloads.rail` (new): "Nothing to download yet" / "Nulla da scaricare, per ora". The sub-label is hidden on mobile.
- Content, gap 20:
  - `downloads.headline` ("Coming soon") in `display` (56/60). Mobile: 40/44.
  - `downloads.body` (`lead`, secondary, max 640).
  - Platform cards (padding 28 0; row with gap 24 on desktop, stacked with gap 20 on mobile):
    - Linux: `LNX`, "Coming soon".
    - Windows: `WIN`, "Coming soon".
    - macOS: `MAC`, "Later".

    Each card has the disabled button `downloads.button` ("Not available yet").
  - Notify form: panel fill, 1 px subtle border, radius 4, padding 28 (20 on mobile), gap 12.
    - Desktop row: the email field (fill) and the Primary button `downloads.form.button` ("Notify me", no icon, padding 0 28), bottom-aligned.
    - Mobile: field, then the button at full width.
    - Under the row: `downloads.form.consent` (`small` 400, secondary). It contains the placeholder [PRIVACY NOTE] (§8).
    - Field texts: `downloads.form.label`, `downloads.form.placeholder`, `downloads.form.error`, `downloads.form.success`.
  - After-form row (desktop space-between, mobile stacked): `downloads.contact` ("Or contact: hello@dentalcraft.app", with a `mailto:` link on the address), then the disclaimer box `disclaimer.full`.

### 5.8 Footer (sunken, 1 px subtle top border)

- Padding 72 80 40 desktop, 48 16 32 mobile. Gap 48 desktop, 32 mobile.
- Top row (desktop: 4 columns, the first three 302 wide, the last fill, gap 24):
  1. Brand: the lockup plus `footer.tagline` (`body`, secondary).
  2. `footer.links.label` (new): "Site" / "Sito", in `mono-label` secondary. Then nav links to Presentation, Vision, Roadmap, Downloads and FAQ (copy *Links*).
  3. `footer.contact.label` ("Contact" / "Contatti"), then `footer.contact` (mailto, underlined).
  4. `footer.language.label` (new): "Language" / "Lingua", then the language switch.
- Mobile: the brand on top, then 2 columns: links on the left; contact plus language on the right.
- Disclaimer strip `disclaimer.full`.
- Legal row: `footer.copyright` ("© 2026 DentalCraft"), and `footer.privacy` (copy: "Privacy policy - [LINK TO COME]", shown as "Privacy policy [link to come]" until the page exists). Desktop: space-between. Mobile: stacked, privacy first.

## 6. About page (`/en/about/`, frame 1821)

- Header and band as on Home. The nav item for the section in view is Current. The frame shows "Technology".
- Sections:
  1. **Technology** (canvas), `#technology`:
     - Rail `technology.label`, sub-label `technology.rail` (new): "Technology and data" / "Tecnologia e dati".
     - `technology.headline` in `display`, `technology.body` (`lead`).
     - A 2-column grid (gap 24/32; 1 column on mobile) of 6 items. Each item has a **solid** 1 px line-strong top rule (these are technical choices, not intentions): `technology.iN.title` (H3) and `technology.iN.body` (`body`, secondary).
     - `technology.microcopy`.
  2. **Regulatory** (panel), `#regulatory`:
     - Rail `regulatory.label`, sub-label `regulatory.rail` (new): "Regulatory stance" / "Posizione normativa".
     - `regulatory.headline` (H1).
     - Callout `regulatory.callout` (the big disclaimer box).
     - `regulatory.body.1` (`lead`, **primary**) and `regulatory.body.2` (`lead`, secondary), max 640.
  3. **FAQ** (canvas), `#faq`:
     - Rail `faq.label`.
     - `faq.headline` (new): "Questions, answered plainly" / "Domande, risposte chiare".
     - 32 px spacer.
     - 8 FAQ items, `faq.qN` / `faq.aN`, the first one open. The design shows item 3 in its Focus state only to document it.
  4. **Contact** (panel), `#contact`:
     - Rail `contact.label` ("Contact").
     - Row: the email as an H1 link, then the Secondary button `contact.button` ("Contact us" / "Scrivici", from the copy's button index) with `href="mailto:hello@dentalcraft.app"`.
  5. Footer as on Home.
- An IT About page and a mobile About page are not drawn. Build them from the same components and the mobile rules in §5 (single column, rail as a row).

## 7. Accessibility checklist

- Contrast: all text pairs are AA or better (`web-tokens.json` lists the ratios). Interactive boundaries are 3:1 or better (line-strong 3.16:1 on panel).
- Disabled text (2.94:1) is used only on disabled controls, always with a lock icon and a "Coming soon" tag.
- Focus: a visible 2 px `#8FB2FF` ring with a 2 px offset on every link, button, summary and input. Never `outline: none` without a replacement.
- Targets: every control is at least 44×44 on mobile (buttons 48, nav rows 44, language segments 40×38 inside a 44 box, toggles 44). On desktop, footer links are 36 high with 8 px of space between.
- Status: marker shape plus word. Never colour alone. The tag text is real text, uppercased by CSS (`text-transform: uppercase`), so screen readers read it as words.
- Landmarks: `header`, `nav[aria-label="Main"]`, `main`, one `section` per anchor with `aria-labelledby` its headline, `footer`.
- The disclaimer band is a plain `<p>` in the header. Do not use `role="alert"`.
- Headings: one `h1` per page (the hero headline on Home; the Technology headline on About). Section headlines are `h2`. Sub-blocks (video, screenshots, aligners) are `h3`. The visual size is decoupled from the level.
- Skip link "Skip to content" / "Vai al contenuto" (new key `a11y.skip`), visible on focus.
- Images: the hero art and the screenshots have `alt` from the copy. Module tabs, platform codes and markers are decorative.
- The video gets IT subtitles (and EN if available), a transcript link, no autoplay, and keyboard-operable controls.
- Motion: only hover colour changes, the accordion and the menu sheet. All of them are disabled under `prefers-reduced-motion`.

## 8. Open issues (decide before launch)

1. **Aligners statuses.** The copy file marks Preparation, Diagnosis and Planning as *In progress*. The brief for this design says only *Case* is In progress. The design follows the brief.
   - Separately, *Scan import* is "Exists today" in the Presentation list, while *Case* (scan import) is "In progress" in the Aligners table.
   - Reconcile the two: for example, case import exists as a core feature while the Aligners case workflow is being ported. Otherwise change one of them.
2. **Video**: no file or poster yet. Ship with the Placeholder state. Swap in Poster once `presentation.mp4`/`.webm` and the subtitles exist.
3. **Screenshot 2** is a design mock, not a capture of the real app. Replace it with a real capture of the Aligners workspace.
4. **Privacy**: the form consent text and the footer privacy link have placeholders. There is no newsletter back end. Choose a provider (or a mailto fallback) and write the privacy note before collecting emails.
5. **Light theme** is not designed: the brand is dark-first. If needed, map tokens to `brand-tokens.json` light values (paper / ink / amber-text #8A5200 / blue #2F5FD0). Never put amber #F2A93B on light surfaces.
6. **New copy keys** marked (new) in this spec (rail sub-labels, status-ledger title, video kicker/meta, legend lines, core plate, footer column labels, FAQ headline, skip link) need to be added to `content/site-copy.{en,it}.md`.
7. **Middle dots**: the band uses "·" separators as the brief asks. The full-sentence form with periods is used everywhere else.
8. The **mobile menu sheet**, the **About page IT/mobile** and a **tablet frame** are specified but not drawn.

## 9. Asset list

| Asset | Source | Use |
|---|---|---|
| Horizontal lockup, dark | `brand/svg/dentalcraft-lockup-horizontal-dark.svg` | Header (168×30 desktop, 143×26 mobile), footer |
| Mark, dark | `brand/svg/dentalcraft-mark-dark.svg` | Video poster and placeholder |
| Module tabs, dark | `brand/svg/module-{al,mb,sp,cb,im}-tab-dark.svg` | Shade guide (1.4× desktop, 1× mobile) |
| Hero art | `design/assets/hero-arch.svg` (live text, B612 Mono) | Hero. Generated from the arch geometry, editable in the FigCraft component `Art/Hero arch` (id 3) |
| Screenshot 1 | `docs/screenshots/home-en.png`, `home-it.png` | Presentation figure 1 |
| Screenshot 2 (stand-in) | `docs/design/screens/05-aligners-workspace.png`, `-it.png` | Presentation figure 2, replace with a real capture |
| Favicons and manifest | `brand/favicon/*` | `<head>` |
| OG image | `brand/og/og-image.png` | Open Graph and Twitter card |
| Fonts | Google Fonts: Atkinson Hyperlegible Next 400/500/600/700, B612 Mono 400/700 | All text |
| Icons (inline SVG, drawn in the file) | play 12×14, lock 12×15, plus/minus 14, check 16, error circle 16, fullscreen 16, pause bars, menu bars | Buttons, form, FAQ, player |
| Video (to come) | `media/presentation.{webm,mp4}`, `presentation.it.vtt`, `presentation-poster.jpg` | Video block |
| Music (not used on the site) | `media/music/` | For the video only |
