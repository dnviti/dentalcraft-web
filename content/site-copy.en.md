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
- **SEO title (<=60 chars):** DentalCraft - dental CAD for clear aligners, in development
- **Meta description (<=155 chars):** A dental CAD for practices and labs, starting with clear aligners, from intraoral scan to print. In development. Not a medical device.
- **OG title:** DentalCraft - dental CAD for clear aligners, in development
- **OG description:** Starting with clear aligners, from intraoral scan to print. Early stage. Not a medical device, not for clinical use.
- **OG image alt:** DentalCraft logo with icons for the five areas of work: aligners, models, splints, crowns and bridges, implants.
- **Keywords (optional):** dental CAD, clear aligners, orthodontic software, intraoral scan, STL, Linux, Windows

### Navigation
Presentation / Vision / Aligners / What's next / In practice / Regulatory / Downloads / FAQ
**Header button:** Try the alpha
**Language switch:** EN | IT

---

## 1. Hero

- **Badge:** In development
- **Headline:** A new dental CAD for the practice and the lab.
- **Subhead:** DentalCraft is an application for digital dentistry that you install on your practice or lab computer. It starts with clear aligner planning; more areas of work are planned for later.
- **Primary CTA:** Watch the presentation
- **Secondary CTA:** Try the alpha
- **Disclaimer line (prominent, under CTAs):** In development. Not a medical device. Not for clinical use.
- **Microcopy:** Early stage. Linux and Windows first. Made in Italy.
- **Hero visual alt:** Stylised 3D view of an upper dental arch in DentalCraft, teeth outlined and numbered.

---

## 2. Presentation - what exists today

- **Section label:** Presentation
- **Headline:** What DentalCraft is, and where it stands
- **Body:**
  DentalCraft is a dental CAD. It grows out of an orthodontic aligner planning tool that its author built earlier. It takes up that work and turns it into a dedicated, faster, standalone application, organised like the professional dental CAD suites: a common base and, on top of it, one area for each type of work.

  The project is at an early stage. Today the application structure, the single file for each case and the 3D view exist. Scan import and the clinical functions are being brought over from the earlier tool and validated.
- **Status list (with tags):**
  - Application structure - `Exists today`
  - Single file for each case - `Exists today`
  - 3D view - `Exists today`
  - Scan import - `In progress` (being brought over from the earlier tool and validated)
  - Clinical functions - `In progress` (being brought over from the earlier tool and validated)

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
  - Alt: DentalCraft home screen showing the list of cases and the entry for Aligners.
- **Screenshot 2 - Aligners workspace**
  - Caption: Aligners workspace with the 3D view. Work in progress.
  - Alt: DentalCraft Aligners workspace with a dental scan in 3D view and the stages of the work on the side.
- **Badge on each image:** Work in progress

*(Alt texts describe the intended screenshots; adjust to the final captures.)*

---

## 3. Vision / Intentions

- **Section label:** Vision
- **Label banner:** What follows is intent, not a description of finished features.
- **Headline:** Why a new dental CAD
- **Body:**
  Digital planning means long hours on heavy scans and 3D models. We think the tool should stay fast, stay on your computer and stay under the clinician's control. DentalCraft is being built around those ideas.

- **Principles (cards):**
  1. **Smooth even with heavy scans.** The aim: work on the 3D model without freezes, even with large scans.
  2. **Not tied to a connection.** Cases stay on your computer. You should not need the internet to work.
  3. **One file for each case.** The whole case in a single open, documented file, with an integrity check.
  4. **Pseudonymised patient data.** Case files are designed to carry no patient names.
  5. **In English and Italian.** Both languages from the start.
  6. **Linux and Windows first.** macOS later.
  7. **Built with a regulatory mindset.** Requirements, risk management and traceability are carried over from day one.
  8. **Independent and made in Italy.** One author, a long-term view.
- **Microcopy:** These are design intentions. They describe where we are heading.

---

## 4. Aligners area

- **Section label:** Aligners - first area
- **Label banner:** Intended workflow. Each stage is tagged `Planned` or `In progress`. Nothing here is finished yet.
- **Headline:** From scan to aligner, in one workspace
- **Body:** The Aligners area is designed to follow the clinical path from intraoral scan to files for printing. The stages below are grouped like the application menu.
- **Legend:** `In progress` = being worked on or validated. `Planned` = not started.

| Group | Stages | Tag |
|---|---|---|
| **Case** | Import intraoral scans (STL, OBJ, PLY) | In progress |
| **Preparation** | Orientation and arch; FDI tooth numbering; tooth segmentation; tooth and gingiva reconstruction | Planned |
| **Diagnosis** | Space analysis; Little irregularity index; Bolton analysis | Planned |
| **Planning** | Setup of the final position; staging per aligner with movement limits for each tooth; interproximal reduction (IPR); attachments | Planned |
| **Occlusion** | Occlusion and bite, including bite with aligners | Planned |
| **Aligner production** | Aligner shell with thickness and clearance; trim line; identification stamp; print check | Planned |
| **Follow-up** | Follow-up visits | Planned |
| **Export** | STL export for each stage; reports | Planned |

*(Decision: only Case is In progress; every other stage is Planned. The site reads the statuses from `content/site.data.json`.)*

- **Group microcopy:**
  - Case: Start from the scan.
  - Preparation: Get the scans ready for planning.
  - Diagnosis: Measure before moving.
  - Planning: Define the target and the steps.
  - Occlusion: Check how the arches meet.
  - Aligner production: Prepare the shell for printing.
  - Follow-up: Compare plan and progress.
  - Export: Files and reports.
- **Workflow diagram alt:** Eight-step flow from Case to Export, each step tagged as planned or in progress.

---

## 5. What's next

- **Section label:** What's next
- **Headline:** One application, several areas of work
- **Body:** DentalCraft will have a common base and, on top of it, one area for each type of work. Aligners comes first. The others are planned, with no dates.
- **Areas of work:**
  - **Aligners** - First area. In active development.
  - **Model Builder** - Planned.
  - **Splint** - Planned.
  - **Crown & Bridge** - Planned.
  - **Implant** - Planned.
- **Microcopy:** No launch dates are announced. Order and scope may change.
- **What's next section alt:** Row of five tabs: Aligners in development, then Model Builder, Splint, Crown and Bridge, Implant as planned.

---

## 6. Work and data

- **Section label:** In practice
- **Headline:** Your work, your data
- **Body:** Choices made for speed, control and traceability of the work.
- **Items:**
  - **An application on your computer.** You install and use it on the practice or lab computer, not through a browser.
  - **A smooth 3D view.** Designed to handle even the most detailed scans smoothly.
  - **One file for each case.** An open, documented file with an integrity check.
  - **Privacy by design.** Patient data is pseudonymised: no names in case files.
  - **Cases stay with you.** You work on cases saved on your computer. An account is planned for licences and support only.
  - **Two languages.** English and Italian.
- **Microcopy:** Details will be published once the file format is final.

---

## 7. Regulatory stance

- **Section label:** Regulatory
- **Headline:** Honest about where we are
- **Body:**
  DentalCraft is not a medical device and is not certified. It must not be used for clinical purposes.

  The project is being built with a regulatory mindset: requirements, risk management and traceability are taken over from the earlier work. The intention is to pursue the appropriate medical-device conformity path when the software is ready for it. That is an intention, not a status.
- **Callout:** In development. Not a medical device. Not for clinical use.

---

## 8. Downloads - Try the alpha

- **Section label:** Downloads
- **Rail:** Alpha, to try
- **Headline:** Try the alpha
- **Body:** An early test version for Linux and Windows. It is in development: many functions are missing, and it may change or stop working between versions.
- **Platform cards:**
  - **Linux** - tag Alpha. Button: Download for Linux. Requirements: 64-bit PC (x86_64). Unpack the archive and open dentalcraft.
  - **Windows** - tag Alpha. Button: Download for Windows. Requirements: Windows 10 or 11, 64-bit. Unzip the folder and open dentalcraft.exe.
  - **macOS** - tag Later. Button (disabled): Not available yet
- **Under each downloadable card:** Version {version} · {size} · {date}, and a collapsed note "For your IT support: SHA-256 checksum" with the hash.
- **Below the cards:** Windows may say the publisher is unknown: the files are not signed yet. Choose More info, then Run anyway. / Free to try, for evaluation only, as is and without warranty. Not a medical device: do not use it on patients or for clinical decisions. / All checksums (text file)
- **Notify form:** removed (decision: no back end, no data collection). A note under the cards says: This site has no forms and collects no data. See the privacy note.
- **Problems or feedback:** hello@dentalcraft.app
- **Disclaimer:** In development. Not a medical device. Not for clinical use.

---

## 9. FAQ

1. **Is DentalCraft available?**
   An alpha version for Linux and Windows can be downloaded from the home page, for evaluation only. It is in early development: it is not a medical device and not for clinical use. The application structure, the single file for each case and the 3D view exist. Scan import and the clinical functions are being brought over from the earlier tool and validated.

2. **Is it certified? Is it a medical device?**
   No. DentalCraft is not a medical device and holds no certification. It is not for clinical use. We are building with a regulatory mindset and intend to pursue the appropriate conformity path in the future.

3. **Which computers will it run on?**
   Linux and Windows first. macOS later.

4. **How much will it cost?**
   Pricing has not been decided.

5. **What happens to patient data?**
   Cases are designed to stay on your computer. Case files are pseudonymised and carry no patient names. An account is planned only for licences and support.

6. **Can I try it?**
   Yes. An alpha version for Linux and Windows can be downloaded from the home page. It is for evaluation only: it is not a medical device and not for clinical use.

7. **What can it do first?**
   The first area is Aligners, for clear aligner planning. The intended workflow is described on the home page: its stages are in progress or planned, and none is finished yet.

8. **Which files will I be able to use?**
   The plan is to import scans in STL, OBJ and PLY and to export each stage as STL. Each case is saved in a single open file.

---

## 10. Footer

- **Tagline:** Dental CAD for the practice and the lab. Made in Italy.
- **Disclaimer:** In development. Not a medical device. Not for clinical use.
- **Contact label:** Contact
- **Contact:** hello@dentalcraft.app
- **Links:** Presentation / Vision / What's next / Downloads / FAQ
- **Privacy note:** Privacy note (link to the About page, section Privacy)
- **Copyright:** © 2026 DentalCraft
- **Language switch:** English | Italiano

---

## Button labels (index)
Watch the presentation / Try the alpha / Play video / Read the transcript / Not available yet / Contact us

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
| `video.poster.title` | A new dental CAD for the practice and the lab. |
| `video.meta` | About 75 seconds. English text, Italian subtitles. |
| `vision.rail` | Intent, not features |
| `roadmap.rail` | No dates announced |
| `roadmap.core.label` | Common base |
| `roadmap.core.items` | Application structure, single file for each case, 3D view |
| `roadmap.m1.note` | First area. In active development. |
| `aligners.rail` | First area |
| `aligners.legend.inprogress` | Being worked on or validated. |
| `aligners.legend.planned` | Not started. |
| `downloads.rail` | Alpha, to try |
| `downloads.note` | This site has no forms and collects no data. See the privacy note. |
| `technology.rail` | Work and data |
| `regulatory.rail` | Regulatory stance |
| `faq.headline` | Questions, answered plainly |
| `footer.links.label` | Site |
| `footer.language.label` | Language |
| `privacy.label` | Privacy |
| `privacy.rail` | Privacy note |
| `privacy.headline` | No cookies, no tracking, no forms |
| `privacy.body.1` | This website sets no cookies, runs no analytics or tracking scripts, loads nothing from third parties and has no forms. We do not collect personal data through it. Your language choice is kept only in your own browser, so that the site can open in your language next time. |
| `privacy.body.2` | Like any website, this one may keep standard access logs (IP address, time, page requested) for security and troubleshooting. If you write to hello@dentalcraft.app, we use your message only to reply. |
| `footer.privacy` | Privacy note |
