# DentalCraft - Website copy (EN)

Status of this text: draft. Vision and presentation are kept apart: "Presentation" describes what exists today; everything else is intent.

**Build source:** the site is generated from `content/site.en.json`, `content/site.it.json` (same keys, flat) and `content/site.data.json` (statuses). This file is the editorial copy; keep the three in sync. The build fails if EN and IT keys differ.

---

## Global

**Mandatory disclaimer (sticky banner under the header, repeated in hero, Downloads and footer):**
> In development. Not a medical device. Not for clinical use.

**Status badge:** In development
**Tags used across the site:** `Exists today` / `In progress` / `Planned`

### SEO / Open Graph
- **SEO title (<=60 chars):** DentalCraft - a native dental CAD, in development
- **Meta description (<=155 chars):** DentalCraft is a native, offline-first dental CAD built in Rust, starting with clear aligner planning. Early stage, in development. Not a medical device.
- **OG title:** DentalCraft - a native dental CAD, in development
- **OG description:** Built in Rust with a GPU 3D viewport. First module: Aligners. Early stage. Not a medical device, not for clinical use.
- **OG image alt:** DentalCraft logo over a 3D dental arch, with the label "In development".
- **Keywords (optional):** dental CAD, clear aligners, orthodontic software, intraoral scan, STL, Rust, Linux, Windows

### Navigation
Presentation / Vision / Aligners / Roadmap / Technology / Regulatory / Downloads / FAQ
**Header button:** Follow the development
**Language switch:** EN | IT

---

## 1. Hero

- **Badge:** In development
- **Headline:** A dental CAD built native, from the ground up.
- **Subhead:** DentalCraft is a desktop application for digital dentistry, written in Rust with a GPU 3D viewport. It starts with clear aligner planning and is designed to grow module by module.
- **Primary CTA:** Watch the presentation
- **Secondary CTA:** Follow the development
- **Disclaimer line (prominent, under CTAs):** In development. Not a medical device. Not for clinical use.
- **Microcopy:** Early stage. Linux and Windows first. Made in Italy.
- **Hero visual alt:** Stylised 3D view of an upper dental arch in the DentalCraft viewport, teeth outlined and numbered.

---

## 2. Presentation - what exists today

- **Section label:** Presentation
- **Headline:** What DentalCraft is, and where it stands
- **Body:**
  DentalCraft is a native dental CAD. It grows out of an orthodontic aligner planning tool that its author first built as a Blender add-on. DentalCraft rebuilds that work as a dedicated, faster, standalone application, with a structure inspired by professional dental CAD suites: a common core plus modules.

  The project is at an early stage. Today the application shell, the project format and the 3D viewport exist. Scan import and the clinical algorithms are being ported and validated.
- **Status list (with tags):**
  - Application shell - `Exists today`
  - Project format (.dcprj) - `Exists today`
  - GPU 3D viewport - `Exists today`
  - Scan import - `In progress` (being ported and validated)
  - Clinical algorithms - `In progress` (being ported and validated)

### Video block
- **Heading:** The 75-second presentation
- **Caption:** A short overview of the project and its direction. Animations in the video are concept illustrations of the intended workflow.
- **Play button label:** Play video
- **Placeholder (until video is ready):** Video coming soon
- **Video slot alt/aria-label:** DentalCraft presentation video, about 75 seconds, with English text and Italian subtitles.
- **Transcript link:** Read the transcript

### Screenshots
- **Heading:** The application today
- **Note:** Screenshots show work in progress and will change.
- **Screenshot 1 - Home**
  - Caption: Home screen. Work in progress.
  - Alt: DentalCraft home screen showing the project list and the module entry for Aligners.
- **Screenshot 2 - Aligners workspace**
  - Caption: Aligners workspace with the 3D viewport. Work in progress.
  - Alt: DentalCraft Aligners workspace with a dental scan in the GPU 3D viewport, and the menu groups on the side.
- **Badge on each image:** Work in progress

*(Alt texts describe the intended screenshots; adjust to the final captures.)*

---

## 3. Vision / Intentions

- **Section label:** Vision
- **Label banner:** What follows is intent, not a description of finished features.
- **Headline:** Why a native dental CAD
- **Body:**
  Dental planning means heavy 3D data and long sessions. We think the software should stay fast, stay local and stay under the clinician's control. DentalCraft is being built around those ideas.

- **Principles (cards):**
  1. **Native performance.** A Rust application with a GPU (wgpu / Vulkan) viewport. The aim: no UI freezes, even with large scans.
  2. **Offline-first.** Projects live on your machine. The software should not need a connection to do its work.
  3. **One open project file.** A single documented `.dcprj` file: a versioned ZIP container with checksums.
  4. **Pseudonymised patient data.** Project files are designed to carry no patient names.
  5. **English and Italian interface.** Both languages from the start.
  6. **Linux and Windows first.** macOS later.
  7. **Built with a regulatory mindset.** Requirements, risk management and traceability are carried over from day one.
  8. **Independent and made in Italy.** One developer, a long-term view.
- **Microcopy:** These are design intentions. They describe where we are heading.

---

## 4. Aligners module

- **Section label:** Aligners - first module
- **Label banner:** Intended workflow. Each stage is tagged `Planned` or `In progress`. Nothing here is available yet.
- **Headline:** From scan to aligner, in one workspace
- **Body:** The Aligners module is designed to follow the clinical path from intraoral scan to printable output. The stages below are grouped like the application menu.
- **Legend:** `In progress` = being ported or validated. `Planned` = not started.

| Group | Stages | Tag |
|---|---|---|
| **Case** | Import intraoral scans (STL, OBJ, PLY) | In progress |
| **Preparation** | Orientation and arch; FDI tooth numbering; segmentation; tooth reconstruction and gingiva | Planned |
| **Diagnosis** | Space analysis; Little irregularity index; Bolton analysis | Planned |
| **Planning** | Setup of the final position; staging per aligner with per-tooth movement limits; IPR; attachments | Planned |
| **Occlusion** | Occlusion and bite, including bite with aligners | Planned |
| **Aligner production** | Aligner shell with thickness and clearance; trim line; identification stamp; print check | Planned |
| **Follow-up** | Follow-up visits | Planned |
| **Output** | STL export per stage; reports | Planned |

*(Decision: only Case is In progress; every other stage is Planned. The site reads the statuses from `content/site.data.json`.)*

- **Group microcopy:**
  - Case: Start from the scan.
  - Preparation: Make the data ready to plan.
  - Diagnosis: Measure before moving.
  - Planning: Define the target and the steps.
  - Occlusion: Check how the arches meet.
  - Aligner production: Prepare the shell for printing.
  - Follow-up: Compare plan and progress.
  - Output: Files and reports.
- **Workflow diagram alt:** Eight-step flow from Case to Output, each step tagged as planned or in progress.

---

## 5. Roadmap

- **Section label:** Roadmap
- **Headline:** One core, several modules
- **Body:** DentalCraft is structured as a common core with modules on top. Aligners comes first. The others are planned, with no dates.
- **Modules:**
  - **Aligners** - First module. In active development.
  - **Model Builder** - Planned.
  - **Splint** - Planned.
  - **Crown & Bridge** - Planned.
  - **Implant** - Planned.
- **Microcopy:** No release dates are announced. Order and scope may change.
- **Roadmap alt:** Row of five module tabs: Aligners in development, then Model Builder, Splint, Crown and Bridge, Implant as planned.

---

## 6. Technology and data

- **Section label:** Technology
- **Headline:** Native code, local data
- **Body:** Technical choices that serve speed, control and traceability.
- **Items:**
  - **Rust, native desktop.** One compiled application. No browser engine in the middle.
  - **GPU viewport.** 3D rendering through wgpu on Vulkan, for smooth handling of dense meshes.
  - **Open project file (.dcprj).** A ZIP container with checksums, versioned and documented.
  - **Privacy by design.** Patient data is pseudonymised: no names in project files.
  - **Offline-first.** Work on local projects. An account (auth.dentalcraft.app) is planned for licences and support only.
  - **Bilingual UI.** English and Italian.
- **Microcopy:** Details will be published as the project format stabilises.

---

## 7. Regulatory stance

- **Section label:** Regulatory
- **Headline:** Honest about where we are
- **Body:**
  DentalCraft is not a medical device and is not certified. It must not be used for clinical purposes.

  The project is being built with a regulatory mindset: requirements, risk management and traceability are carried over from the earlier work. The intention is to pursue the appropriate medical-device conformity path when the software is ready for it. That is an intention, not a status.
- **Callout:** In development. Not a medical device. Not for clinical use.

---

## 8. Downloads - Coming soon

- **Section label:** Downloads
- **Headline:** Coming soon
- **Body:** There is nothing to download yet. Come back to this page for news, or write to us.
- **Platform cards (disabled):**
  - **Linux** - Coming soon
  - **Windows** - Coming soon
  - **macOS** - Later
- **Button on each card (disabled):** Not available yet
- **Notify form:** removed (decision: no back end, no data collection). A note under the cards says: This site has no forms and collects no data. See the privacy note.
- **Or contact:** hello@dentalcraft.app
- **Disclaimer:** In development. Not a medical device. Not for clinical use.

---

## 9. FAQ

1. **Is DentalCraft available?**
   Not yet. It is in early development. The application shell, project format and 3D viewport exist. Scan import and the clinical algorithms are being ported and validated.

2. **Is it certified? Is it a medical device?**
   No. DentalCraft is not a medical device and holds no certification. It is not for clinical use. We are building with a regulatory mindset and intend to pursue the appropriate conformity path in the future.

3. **Which platforms will it run on?**
   Linux and Windows first. macOS later.

4. **How much will it cost?**
   Pricing has not been decided.

5. **What happens to patient data?**
   The design is offline-first: projects stay on your machine. Project files are pseudonymised and carry no patient names. An account is planned only for licences and support.

6. **Can I try it?**
   Not yet. Early access is planned for later. Come back to this site for news.

7. **What can it do first?**
   The first module is Aligners, for clear aligner planning. The intended workflow is described above; it is being ported and validated, and nothing in it is available yet.

8. **Which file formats does it use?**
   Scans in STL, OBJ and PLY are intended as inputs. Projects use a single open `.dcprj` file. Per-stage export is intended as STL.

---

## 10. Footer

- **Tagline:** Native dental CAD. Made in Italy.
- **Disclaimer:** In development. Not a medical device. Not for clinical use.
- **Contact label:** Contact
- **Contact:** hello@dentalcraft.app
- **Links:** Presentation / Vision / Roadmap / Downloads / FAQ
- **Privacy note:** Privacy note (link to the About page, section Privacy)
- **Copyright:** © 2026 DentalCraft
- **Language switch:** English | Italiano

---

## Button labels (index)
Watch the presentation / Follow the development / Play video / Read the transcript / Not available yet / Contact us

## Notes
- Placeholders: screenshot final alt texts.
- No dates, prices, customers, certifications or performance numbers are stated anywhere.

---

## 11. New keys (added for the site build)

| Key | Text |
|---|---|
| `disclaimer.band` | In development · Not a medical device · Not for clinical use |
| `disclaimer.link` | Regulatory stance |
| `a11y.skip` | Skip to content |
| `presentation.rail` | What exists today |
| `presentation.status.title` | Status, today |
| `video.kicker` | DentalCraft / Presentation |
| `video.poster.title` | A dental CAD, built native. |
| `video.meta` | About 75 seconds. English text, Italian subtitles. |
| `vision.rail` | Intent, not features |
| `roadmap.rail` | No dates announced |
| `roadmap.core.label` | Core |
| `roadmap.core.items` | Application shell, project format (.dcprj), GPU 3D viewport |
| `roadmap.m1.note` | First module. In active development. |
| `aligners.rail` | First module |
| `aligners.legend.inprogress` | Being ported or validated. |
| `aligners.legend.planned` | Not started. |
| `downloads.rail` | Nothing to download yet |
| `downloads.note` | This site has no forms and collects no data. See the privacy note. |
| `technology.rail` | Technology and data |
| `regulatory.rail` | Regulatory stance |
| `faq.headline` | Questions, answered plainly |
| `footer.links.label` | Site |
| `footer.language.label` | Language |
| `privacy.label` | Privacy |
| `privacy.rail` | Privacy note |
| `privacy.headline` | No cookies, no tracking, no forms |
| `privacy.body.1` | This website sets no cookies, runs no analytics or tracking scripts, loads nothing from third parties and has no forms. We do not collect personal data through it. Your language choice is kept only in your own browser, so that the site can open in your language next time. |
| `privacy.body.2` | Like any web server, the one hosting this site may keep standard access logs (IP address, time, page requested) for security and troubleshooting. If you write to hello@dentalcraft.app, we use your message only to reply. |
| `footer.privacy` | Privacy note |
