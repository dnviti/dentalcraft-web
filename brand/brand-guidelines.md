# DentalCraft brand guidelines v1.0

DentalCraft is a native desktop dental CAD made in Italy (Rust, GPU viewport). Its first module is clear aligners. Model Builder, Splint, Crown & Bridge and Implant follow. The brand is for dental technicians, orthodontists and dental labs. It should feel clinically precise, hand-made and warm, without stock dental imagery.

Master file: `dentalcraft-brand.vectorcraft`. Artboards 00 to 05 hold the concepts and the construction (the arch spine, offsets and outlined type). Artboards 10 to 18 hold the final masters. Tokens: `brand-tokens.json`.

## 1. Concept

### Explored roughs (`png/concept-roughs.png`)
1. **Shell**: an arch inside its offset band, opening downward. Rejected: the outline reads as a horseshoe magnet.
2. **Shade tab with an arch cut**: Rejected: it copies the UI tile and does not work as a letterform.
3. **DC from one arch and its offset**: Chosen.
4. **Molar with a vernier scale**: Rejected: it is the clip-art tooth the brief asked to avoid.

### Chosen: "Arch & Shell"
The mark starts from one curve: the dental arch, rotated so that the incisors point right. The amber stroke is the arch. The enamel band around it is the same arch offset outward by one band width plus one clearance gap, closed by a straight stem. That gives the aligner shell around the teeth, and the shell becomes the **D**. The arch opens toward the stem and reads as the **C**, which completes the "DC" monogram.

- **Precision**: every line comes from one spine curve and one offset. The gap between arch and shell is the clearance a technician sets in the software. The arch ends are cut square to the stem, like a trim line.
- **Craft and warmth**: the amber comes from the curing-lamp shield, which the app already uses for actions. The enamel colour is the colour of the model.
- **Coherent with the app**: amber means action, curing blue means selection, graphite surfaces carry enamel text, and shade-guide tabs are used for module tiles (`dentalcraft-design/ui-spec.md`). The app icon is a shade tab: a dark handle band over a raised body. This replaces the placeholder tooth tile.

Construction rules: one arch curve; the shell is an exact offset of it; one band width everywhere (x); butt ends, mitred corners, no round caps; two flat colours, no gradients.

## 2. Logo system

| Asset | File (svg/) | Use |
|---|---|---|
| Mark | `dentalcraft-mark-{dark,light,black,white}.svg` | App UI, avatars, small placements, watermark |
| Small-size mark | `dentalcraft-mark-small-*.svg` | Any mark under 48 px tall (thicker band, wider gap) |
| Wordmark | `dentalcraft-wordmark-*.svg` | Only where the mark is already present nearby |
| Horizontal lockup | `dentalcraft-lockup-horizontal-*.svg` | Default signature: web header, documents, splash |
| Stacked lockup | `dentalcraft-lockup-stacked-*.svg` | Square formats, covers, packaging |
| App icon | `dentalcraft-app-icon-macos.svg` (824 body on the 1024 macOS grid), `dentalcraft-app-icon-full.svg` (full-bleed rounded square for Windows and Linux), `*-small.svg` (16 to 64 px) | OS icons |

Colour variants: `dark` is for dark backgrounds (enamel shell, amber arch). `light` is for light backgrounds (ink shell, deep-amber arch). `black` and `white` are one-colour versions for engraving, fax, embossing, laser marking on printed models and single-colour print. All SVGs have outlined text, a viewBox, no metadata and 2-decimal coordinates.

**Wordmark**: Atkinson Hyperlegible Next Bold, tracking -12/1000 em, converted to outlines. It is the same family as the UI, so the product and the brand read as one voice. Do not reset it in another font.

**Horizontal lockup**: the mark is 1.8 times the cap height. The gap is 2.75x. The cap height is centred on the mark.
**Stacked lockup**: the mark is 3 times the cap height and centred. The gap is 2.5x.

### Clear space and minimum sizes
- **x** is the shell band width, 12.3 % of the mark height.
- Keep **2x** clear on every side of the mark and of both lockups. No text, edge or other logo goes inside it.
- Minimum sizes:
  - Mark: 16 px or 5 mm. Below 48 px, use the small-size mark.
  - Horizontal lockup: 120 px or 30 mm wide.
  - Stacked lockup: 80 px or 22 mm wide.
  - Wordmark alone: 90 px wide.

## 3. Colour

| Token | Hex | Role | Contrast (WCAG) |
|---|---|---|---|
| Curing Amber | `#F2A93B` | Arch on dark; actions | 8.7:1 on graphite, 9.4:1 on canvas. Only 2.0:1 on white, so never use it on light. |
| Amber Deep | `#B8740F` | Arch on light | 3.8:1 on white. Graphics and large text only. |
| Amber Text (light) | `#8A5200` | Amber text and links on light | 6.4:1 on white |
| On Amber | `#1C1204` | Text on amber buttons | 9.2:1 |
| Enamel | `#ECE6DA` | Shell, wordmark and text on dark | 14.0:1 on graphite |
| Ink | `#15191C` | Shell, wordmark and text on light | 17.7:1 on white |
| Curing Blue | `#6F9BFF` / `#2F5FD0` | Selection and focus (dark / light). Never in the logo. | 6.5:1 / 5.3:1 |
| Canvas | `#0F1214` | Darkest background | |
| Graphite | `#161B1E` | Primary dark surface | |
| Raised | `#1D2327` | Icon body, module tab body | |
| Sunken | `#0B0E10` | Shade-tab handle on dark | |
| Stone | `#A9A397` | Secondary text on dark | 7.5:1 on canvas |
| Slate | `#4E565B` | Secondary text on light | 7.0:1 on paper |
| Paper / White | `#F6F7F5` / `#FFFFFF` | Light surfaces | |

Proportion: graphite and enamel cover most of any surface. Amber appears once per composition: the arch in the mark, one action, or one highlighted tab. Blue never appears in brand graphics.

## 4. Typography (web and print, all OFL on Google Fonts)
- **Atkinson Hyperlegible Next** (400, 500, 600, 700, 800) for headlines and text. Headlines use 700 with -1 % tracking. Body text is 17/26 at 400.
- **B612 Mono** (400, 700) for module codes (AL, MB, SP, CB, IM in Bold), measurements, versions, file paths and small all-caps labels (+4 % tracking). It is the aviation-cockpit mono the app uses for every measured value.
- CSS: `https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible+Next:wght@400;500;600;700;800&family=B612+Mono:wght@400;700&display=swap`
- Type scale: see `brand-tokens.json` → `type_scale_web`.

## 5. Module glyphs
Each glyph sits on a 48 grid (40 px live area) and is built from the same arch curve and band width as the mark. Each has exactly one amber element, the anatomy or tooth the module works on. The ink parts are what the lab produces.

| Code | Module | Glyph |
|---|---|---|
| AL | Aligners | Arch (amber) inside its shell |
| MB | Model Builder | Arch on a model base |
| SP | Splint | Arch under a flat occlusal plate |
| CB | Crown & Bridge | Three shade-tab units, the pontic in amber |
| IM | Implant | Crown (amber) on a threaded fixture |

Files:
- `module-*-glyph-{dark,light,black,white}.svg`: the pictogram alone, for module cards and chips.
- `module-*-tab-{dark,light}.svg`: a 120×144 shade tab with a handle band and the code in B612 Mono Bold, for launchers, docs and marketing.

In a row, the tabs read as a shade guide. Raise the current module by 20 px, as in the OG image.

## 6. Do / Don't
**Do**
- Use the dark lockup on graphite or canvas and the light lockup on white or paper.
- Use the small-size mark for favicons, tabs and toolbars under 48 px.
- Keep the arch amber and the shell enamel or ink. In a one-colour version, both take the same colour.
- Put photos of models or scans behind the mark only on a calm, dark area. Otherwise use the white or black version.

**Don't**
- Don't recolour the arch blue, red or with a gradient. Don't swap the shell and arch colours.
- Don't add shadows, bevels, glows, 3D extrusion or sparkles. Don't put the mark inside a circle or shield.
- Don't add a tooth, smile or sparkle pictogram next to the mark.
- Don't stretch the mark, rotate it, open the stem or close the gap between arch and shell. The clearance is the idea.
- Don't put amber on white for the arch. Use Amber Deep `#B8740F`.
- Don't set "DentalCraft" in another font, all caps or with wide tracking, and don't split it into two colours.
- Don't use the module glyphs as the company logo.

## 7. Files
- `dentalcraft-brand.vectorcraft`: editable master (construction plus final artboards)
- `svg/`: marks, small marks, wordmarks, lockups (4 colour variants each), app icons, module glyphs and tabs
- `png/`: marks at 256/512/1024, lockups at 800w/1600w (horizontal) and 400h/800h (stacked), wordmarks at 800w/1600w, small marks at 16 to 64, `app-icon/` from 16 to 1024 (macOS and full bleed), `modules/` glyphs at 48/96/192 and tabs @1x/@2x, `concept-roughs.png`
- `favicon/`: `favicon.svg`, `favicon.ico` (16/32/48), `favicon-16/32/48.png`, `apple-touch-icon-180.png`, `android-chrome-192/512.png`, `site.webmanifest`
- `og/og-image.png` (1200×630) and its source `og-image.svg`. The tagline "Precision dental CAD for the lab bench." is a placeholder.

HTML head:
```html
<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon-180.png">
<link rel="manifest" href="/site.webmanifest">
<meta property="og:image" content="/og-image.png">
```
