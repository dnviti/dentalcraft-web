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

  The project is at an early stage. The alpha already covers the path from scan import to a first plan: find and separate the teeth, build 3D teeth, analyse the case, register the bite, set a final position, plan the aligners and prepare files for printing. Planning and production are still being validated against the earlier tool: do not rely on their results.
- **Status list (with tags):**
  - Application structure - `Exists today`
  - Single file for each case, saved automatically - `Exists today`
  - 3D view with selection, move, rotate and scale - `Exists today`
  - Scan import, with automatic closing of open scans; scans and imported models can be removed; a case can start with no scans - `Exists today`
  - 3D scanning and turntable, from the New project screen and inside a case (alpha) - `In progress`
  - Find the teeth, separate teeth and gum, 3D teeth - `Exists today`
  - Case analysis and bite - `Exists today`
  - Final position, aligners and clinical review - `In progress`
  - Production and export for printing - `In progress`
  - Installers with automatic updates - `Exists today`
  - Commands for scripts and AI agents - `Exists today`
  - Anonymous diagnostics to help fix bugs, only if you opt in - `Exists today`
  - Settings, with a simple interface by default and a Next step marker - `Exists today`
  - Print the aligners directly on the Elegoo Saturn 4 Ultra 16K: files saved to a folder or a USB stick, with a record of the aligners printed and missing - `Exists today`
  - Printing over the network, straight to the printer - `Planned`
  - Checking the printed aligners on real prints (not done yet) - `Planned`

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
- **Label banner:** Status of each stage in the alpha. Planning, production and export are still in development: their results are not validated and must not be used for patients.
- **Headline:** From scan to aligner, in one workspace
- **Body:** The Aligners area follows the clinical path from intraoral scan to files for printing. The stages below are grouped like the application menu, and each one says what the alpha already does.
- **Legend:** `Exists today` = works in the alpha, early version, not validated for clinical use. `In progress` = partly there, being worked on or validated. `Planned` = not started (shown only when a stage has it).

| Group | What the alpha does | Tag |
|---|---|---|
| **Case** | Start a case from the New project screen with imported scans (STL, OBJ, PLY), with a scan made by a 3D scanner, or with no scans at all, and add them later in the case, by import or by scanner. An open scan is closed automatically with a flat base. Remove a scan or an imported model with the bin in the list, the Selected component panel or the Delete key, with a confirmation; Ctrl+Z brings it back. Choose the arch by hand and flip the occlusal side. Scanning inside the app, with or without a turntable, is an early alpha: the automatic turntable scan builds a 0.1 mm surface from all the views, cleans it and closes its holes by itself. | Exists today |
| **Preparation** | Find the teeth and number them (FDI), with an automatic check against teeth found behind the last molars and against neighbours merged into one, with marks you can add, delete or renumber by hand, and missing teeth. Separate teeth and gum, with a brush and border cleaning for corrections. 3D teeth, each a closed model, with a gum that follows them and is closed with a 3 mm base. See a tooth's region and margin line. | Exists today |
| **Diagnosis** | Case analysis: space, crowding, Little irregularity index, Bolton and the complexity of the case. Enter your own measured values and the results follow them. | Exists today |
| **Planning** | Final position, with parameters, the arch line drawn by hand, move a tooth and back to the initial position. Aligners: stages, change calendar, slow a tooth, stage slider. Clinical review with attachments and interproximal reduction (IPR) marks. | In progress |
| **Occlusion** | Bite report, bite scans, registration on the bite scan or with three points picked by hand, bite correction and a contact map. Registration accepts partial or low-quality bite scans: a good front part is enough, and an uncertain result is marked ‘to review’ instead of refused. The bite scan only sets the occlusion of the arches and is not shown in the 3D view. | Exists today |
| **Aligner production** | Production settings (thickness, clearance, quality), where the aligner ends, trim line with contact bridges, holes and checks, a bar over each missing tooth that keeps the aligner in one piece, clean ends behind the last molars, identification stamps, bite with aligners. The aligner can be previewed in the 3D view, only when you ask. High-quality files are still slow to produce. Print: the aligners are printed directly on the Elegoo Saturn 4 Ultra 16K. Each one is turned so that the side that fits the teeth faces away from the plate, gets supports on its outer side only and stands on a U-shaped raft; the parts are arranged on the plate and sliced into GOO files with the DENTAL 45 machine parameters. A Print window saves the files to a folder or a USB stick (printing over the network is not available yet) and keeps track of which aligners are printed and which are missing. Not yet checked on real prints: do not rely on it for patients. | In progress |
| **Follow-up** | Control visit: compare a new scan with the plan, and re-plan from a delivered aligner. Tooth-by-tooth tracking is not there yet. | In progress |
| **Export** | Export for printing: STL files for each stage (aligners and models), change calendar, report and patient programme. The export ends in error, naming the files, when a file fails the print check. Study models, also shown in the 3D view. | In progress |

*(Rule: DONE in `docs/plan/PORT-GAP-MAP.md` is Exists today, PARTIAL is In progress. Planning and production are never shown as validated. The site reads the statuses from `content/site.data.json`.)*

- **Group microcopy:**
  - Case: Start from the scan.
  - Preparation: Get the scans ready for planning.
  - Diagnosis: Measure before moving.
  - Planning: Define the target and the steps. In development: do not use the results for patients.
  - Occlusion: Check how the arches meet.
  - Aligner production: Prepare the shell and print it. In development.
  - Follow-up: Compare plan and progress. Early version.
  - Export: Files and reports. Being completed.
- **Workflow diagram alt:** Eight-step flow from Case to Export, each step tagged as exists today or in progress.

---

## 5. What's next

- **Section label:** What's next
- **Headline:** One application, several areas of work
- **Body:** DentalCraft will have a common base and, on top of it, one area for each type of work. Aligners comes first. The others are planned, with no dates.
- **Areas of work:**
  - **Aligners** - First area. In active development: from scan to bite it works in the alpha; planning and production are still being validated.
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
  - **An application on your computer.** You install and use it on the practice or lab computer, not through a browser. Installers for Linux and Windows check for updates and ask before installing them.
  - **A smooth 3D view.** Click any tooth, gum or scan to select it and see it outlined, then move, rotate or scale it in the view. Designed to stay smooth even with detailed scans: the frame rate is capped at 60 per second with vsync, and the menu and details panels can be resized.
  - **One file for each case.** An open, documented file with an integrity check. It is saved automatically a moment after each change, and whenever you save.
  - **Privacy by design.** Patient data is pseudonymised: no names in case files. Anonymous diagnostics are sent only if you opt in.
  - **Cases stay with you.** You work on cases saved on your computer. An account is planned for licences and support only.
  - **Two languages.** English and Italian.
  - **Driven by scripts and AI agents.** Every action is also a command of dentalcraft-cli and its MCP server, so scripts and AI agents can run the same steps.
  - **Nothing silently out of date.** When you change a step, the later results that depend on it are listed as out of date.
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
  - **Linux** - tag Alpha. Button: Download for Linux (opens the download page, `#linux`). Requirements: 64-bit PC (x86_64). With installer (Flatpak, Fedora, Debian and Ubuntu, AppImage) or standalone.
  - **Windows** - tag Alpha. Button: Download for Windows (opens the download page, `#windows`). Requirements: Windows 10 or 11, 64-bit. With installer or standalone.
  - **macOS** - tag Later. Button (disabled): Not available yet
- **Under each downloadable card:** Version {version} · {date}. Sizes and checksums are on the download page (section 13).
- **Below the cards:** The Windows programs and installers are signed with DentalCraft's own certificate (self-signed, SHA-256 fingerprint 24:DD:54:2E:33:7B:CE:A9:9C:79:3D:57:DE:53:B6:D3:55:DC:01:5B:F1:27:0D:20:D1:32:1D:56:DC:F0:AA:26). Windows does not know this certificate, so SmartScreen may still warn and show an unknown publisher. To check a file, right-click it, choose Properties, then Digital Signatures, and compare the fingerprint of the certificate. Choose More info, then Run anyway. / Free of charge under the DentalCraft licence, as is and without warranty. Not a medical device: do not use it on patients or for clinical decisions. [Licence link to the licence page] / All checksums (text file)
- **Notify form:** removed (decision: no back end, no data collection). A note under the cards says: This site has no forms and collects no data. The application sends anonymous diagnostic data only if you opt in. See the privacy note.
- **Problems or feedback:** hello@dentalcraft.app
- **Disclaimer:** In development. Not a medical device. Not for clinical use.

---

## 9. FAQ

1. **Is DentalCraft available?**
   An alpha version for Linux and Windows can be downloaded from the home page, free of charge, for non-clinical use (evaluation, training, research and design trials). It is in early development: it is not a medical device and not for clinical use. It already lets you import scans, find and separate the teeth, build 3D teeth, analyse the case, register the bite, set a final position, plan the aligners and prepare files for printing. Planning and production are still in development.

2. **Is it certified? Is it a medical device?**
   No. DentalCraft is not a medical device and holds no certification. It is not for clinical use. We are building with a regulatory mindset and intend to pursue the appropriate conformity path in the future.

3. **Which computers will it run on?**
   Linux and Windows first. macOS later.

4. **Is it free?**
   Yes. The alpha can be downloaded and used free of charge for non-commercial purposes, under the PolyForm Noncommercial 1.0.0 licence (source-available). Commercial use needs a licence from the author. It is not for clinical use. See the licence page for the terms.

5. **What happens to patient data?**
   Cases are designed to stay on your computer. Case files are pseudonymised and carry no patient names. Scans, projects and patient data are never sent to us. An account is planned only for licences and support.

6. **Can I try it?**
   Yes. An alpha version for Linux and Windows can be downloaded from the home page, free of charge, for non-clinical use: evaluation, training, research and design trials. It is provided as is. It is not a medical device and not for clinical use.

7. **What can it do today?**
   The first area is Aligners, for clear aligner planning. The home page lists every stage with its status. From scan import to the bite it works in the alpha; the final position, the aligners, the clinical review, production and export are still in development, and their results are not validated: do not use them for patients.

8. **Which files can I use?**
   You can import scans in STL, OBJ and PLY; open scans are closed automatically with a base. You can also scan with a supported 3D scanner (early alpha), from the New project screen or later in the case, and add the result to the project. Export for printing writes STL files for each stage, with a change calendar and a report, and it ends in error if a file fails the print check: that function is still being completed. Each case is saved in a single open file, automatically a moment after each change and whenever you save.

9. **Can I use it from scripts or with an AI agent?**
   Yes. Every action in the application, scanning and the turntable included, is also a command of the dentalcraft-cli tool, which comes with the standalone downloads and the installers, and of its MCP server, so a script or an AI agent can run the same steps.

10. **How does it update?**
    The Flatpak, Fedora and Debian/Ubuntu versions update with your system. All the others check this site when DentalCraft starts, ask before updating and verify the signature of the update before installing it.

11. **Can I scan with a 3D scanner inside DentalCraft?**
    Yes, as an early alpha. On the New project screen, a Scan button next to Browse files… opens a scan window, and the same window opens from Scan import in the case: connect a scanner, start, pause and stop the live capture, clean up the point cloud, create the surface and add it to the project as upper arch, lower arch or bite. With the turntable, an automatic scan stops the table at each position, captures it standing still and rebuilds the surface from all the views at 0.1 mm, then cleans it, closes its holes and simplifies it; the views of a piece that moved are left out, so fix the model firmly to the platter. The window is shared by the whole application, so any area of work can offer it. It works with the Revopoint MINI 2 over USB on Linux and, new in version 0.2.0-alpha.9, on Windows (still alpha, tested so far in a Windows virtual machine), with no vendor SDK, using the calibration stored in the scanner (read automatically) or, failing that, an approximate one, unless you supply a calibration file. The Revopoint 3D Camera SDK can be used as an optional backend: you supply it, with Revopoint's own authorisation, and it is not bundled. A built-in simulated scanner lets you try the workflow without hardware. On Windows the scanner is read through the system's Media Foundation video capture, and the fill light, the fast exposure and reading the stored calibration work as on Linux. The Revopoint Dual-axis Turntable works over Bluetooth LE (tested on Linux and Windows) and reconnects by itself if the link drops during a scan; if the scanner or the table moved since the turntable calibration, the automatic scan stops after its first views and asks you to calibrate again. Not a medical device: do not use scans made this way for clinical decisions.

12. **Can I start a project without scans?**
    Yes. On the New project screen scans are optional: import files, scan with a supported 3D scanner (early alpha), or create the project empty. In the project you can add the upper arch, lower arch and bite later, by import or with the scanner. Not a medical device: do not use it for clinical decisions.

13. **Does DentalCraft send any data to you?**
    Only if you agree. At first start the application asks whether it may send anonymous diagnostic data (crash reports, error messages, the version, system and graphics card, and recent log lines with personal paths removed) to help fix bugs. The box is unticked by default and you can change it at any time in the account menu. Scans, projects, patient data and account data are never sent. See the privacy note for the full list.
14. **What are Settings and the simple interface?**
    Settings opens from the menu at the top right and gathers the general options, the workspace, updates and privacy. Its option Advanced options and parameters is off by default: the side panels then show only the automatic steps and the most useful corrections, and the menu marks the Next step to take. Turn it on to see every parameter and technical value.
15. **Can I print the aligners with DentalCraft?**
    Yes, directly, on the Elegoo Saturn 4 Ultra 16K. The Print window turns each aligner so that the side that fits the teeth faces away from the plate, adds supports on the outer side only and a U-shaped raft, arranges the parts on the plate and slices them into GOO files with the DENTAL 45 machine parameters. You save the files to a folder or a USB stick and print from the printer; printing over the network is planned, not available yet. DentalCraft also keeps track of which aligners are printed and which are missing. It has not been checked on real prints yet, so do not use the printed aligners on patients. Not a medical device.
16. **Where are the source code and the documentation?**
    The source code is public on GitHub, under the PolyForm Noncommercial License 1.0.0 (source-available, not open source). The documentation is at https://dnviti.github.io/dentalcraft-docs/.

---

## 10. Footer

- **Tagline:** Dental CAD for the practice and the lab. Made in Italy.
- **Disclaimer:** In development. Not a medical device. Not for clinical use.
- **Contact label:** Contact
- **Contact:** hello@dentalcraft.app
- **Links:** Presentation / Vision / What's next / Downloads / FAQ
- **Licence:** Licence (link to the licence page)
- **Privacy note:** Privacy note (link to the About page, section Privacy)
- **Documentation:** Documentation (link to https://dnviti.github.io/dentalcraft-docs/)
- **Copyright:** © 2026 Daniele Viti
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
| `roadmap.core.items` | Application structure, single file for each case (saved automatically), 3D view with selection and move, rotate and scale, 3D scanning in a window shared by the whole application (early alpha), a Settings window with a simple interface by default |
| `roadmap.m1.note` | First area. In active development: from scan to bite it works in the alpha; planning and production are still being validated. |
| `aligners.rail` | First area |
| `aligners.legend.exists` | Works in the alpha. Early version, not validated for clinical use. |
| `aligners.legend.inprogress` | Partly there. Being worked on or validated. |
| `aligners.legend.planned` | Not started. |
| `downloads.rail` | Alpha, to try |
| `downloads.terms` | Free of charge under the PolyForm Noncommercial 1.0.0 licence (source-available), as is and without warranty. Not a medical device: do not use it on patients or for clinical decisions. |
| `downloads.terms.link` | Licence |
| `downloads.note` | This site has no forms and collects no data. The application sends anonymous diagnostic data only if you opt in. See the privacy note. |
| `technology.rail` | Work and data |
| `regulatory.rail` | Regulatory stance |
| `faq.headline` | Questions, answered plainly |
| `footer.links.label` | Site |
| `footer.language.label` | Language |
| `privacy.label` | Privacy |
| `privacy.rail` | Privacy note |
| `privacy.headline` | No tracking on the site; app diagnostics only if you agree |
| `privacy.body.1` | This website sets no cookies, runs no analytics or tracking scripts, loads nothing from third parties and has no forms. We do not collect personal data through it. Your language choice is kept only in your own browser, so that the site can open in your language next time. |
| `privacy.body.2` | Like any website, this one may keep standard access logs (IP address, time, page requested) for security and troubleshooting. If you write to hello@dentalcraft.app, we use your message only to reply. |
| `privacy.app.title` | The application: anonymous diagnostics, only if you opt in |
| `privacy.app.1` | The DentalCraft application can send anonymous diagnostic data to the developer, to find and fix bugs. It is off until you agree: at first start a window asks you, with the checkbox unticked, and you can change your choice at any time in the account menu. If you do not agree, nothing is collected or sent. |
| `privacy.app.2` | What is sent: the application version and how it was installed; your operating system and language; the graphics card and its driver, the amount of memory and the number of processors; crash reports with their backtrace; error and warning codes and messages; the latest log lines before a problem, with personal paths removed; one record each time the application starts; and a random installation ID, generated on your computer and not linked to your account. |
| `privacy.app.3` | What is never sent: scans, projects and case files, patient data, case aliases or codes, file names, and account data (name, email, sign-in tokens). The server does not store your IP address with this data. |
| `privacy.app.4` | Where it goes and for how long: only to DentalCraft's own server (auth.dentalcraft.app), never to a third party. It is kept for 90 days, then deleted, and it is used only to find and fix bugs. If you turn the option off, the data not yet sent and the installation ID are deleted from your computer. Questions: hello@dentalcraft.app. |
| `footer.licence` | Licence |
| `footer.privacy` | Privacy note |
| `footer.source` | Source code (link to the GitHub repository) |
| `footer.docs` | Documentation (link to https://dnviti.github.io/dentalcraft-docs/) |
| `srclicence.label` | Licence |
| `srclicence.rail` | Source code |
| `srclicence.headline` | Public source code, free for non-commercial use |
| `srclicence.body.1` | The source code of DentalCraft is public on GitHub. It is source-available, not open source: you can read it, build it and use it for any noncommercial purpose, under the PolyForm Noncommercial License 1.0.0. |
| `srclicence.body.2` | Commercial use is not allowed without a licence from the author. To ask for one, write to hello@dentalcraft.app. |
| `srclicence.body.3` | The account server is closed source and is not part of the public code. DentalCraft is not a medical device. |
| `srclicence.github` | Source code on GitHub |
| `srclicence.docs` | Documentation (link to https://dnviti.github.io/dentalcraft-docs/) |
| `srclicence.fonts` | This site uses the fonts Atkinson Hyperlegible Next and B612 Mono, both under the SIL Open Font License 1.1: |
| `srclicence.fonts.atkinson` | Atkinson Hyperlegible Next, licence text |
| `srclicence.fonts.b612` | B612 Mono, licence text |

## 12. Licence page (`/en/licence/`)

The page renders `content/licence.md`, the PolyForm Noncommercial License 1.0.0 (same bytes as `LICENSE.md`, English only), under a short plain-language summary per language. The summary is not part of the licence.

| Key | Text |
| --- | --- |
| `meta.licence.title` | Licence - DentalCraft, PolyForm Noncommercial 1.0.0 |
| `meta.licence.description` | DentalCraft is source-available under the PolyForm Noncommercial License 1.0.0: free for non-commercial use. Commercial use needs a licence from the author. Not a medical device. |
| `meta.licence.ogTitle` | Licence - DentalCraft, PolyForm Noncommercial 1.0.0 |
| `meta.licence.ogDescription` | DentalCraft is source-available and free for non-commercial use. Commercial use needs a licence from the author. Not a medical device. |
| `licence.label` | Licence |
| `licence.rail` | Source-available licence |
| `licence.headline` | Licence |
| `licence.summary.1` | DentalCraft is source-available under the PolyForm Noncommercial License 1.0.0. You can use it, change it and share it for any noncommercial purpose, free of charge. |
| `licence.summary.2` | Commercial use is not allowed without a licence from the author. To ask for one, write to hello@dentalcraft.app. |
| `licence.summary.3` | DentalCraft is not a medical device and is not validated for clinical use. It comes as is, without warranty. |
| `licence.note` | This summary is not part of the licence. The text below is the official English text of the PolyForm Noncommercial License 1.0.0 and is the only text that applies. |

## 13. Download page (`/en/download/`)

One card per operating system (Linux, Windows, macOS later), each with two columns: **Installer** and **Standalone**. Only the kinds present in the release are listed; an empty column shows the disabled button "Not available yet". Every file shows Version {version} · {size} · {date} · file name, and the collapsed SHA-256 note. Terminal commands have a Copy button. Windows adds the SmartScreen note (`downloads.smartscreen`). Under the cards: the terms, the Signatures block with the release key fingerprint and links to both public keys and the checksums file, then the disclaimer.

| Key | Text |
| --- | --- |
| `downloads.version` | Version {version} · {date} |
| `dl.rail` | Installer or standalone |
| `dl.headline` | Download DentalCraft |
| `dl.body` | Choose how to get it. The installer adds DentalCraft to your computer and keeps it up to date. The standalone version runs from a folder you unpack, without installing anything. |
| `dl.updates` | Updates: the Flatpak, Fedora and Debian/Ubuntu versions update with your system. All the others check this site when DentalCraft starts, ask before updating, and verify the update's signature before installing it. |
| `dl.req.linux` | 64-bit PC (x86_64). |
| `dl.req.windows` | Windows 10 or 11, 64-bit. |
| `dl.installer` | Installer |
| `dl.standalone` | Standalone |
| `dl.installer.linux` | Pick the one that matches your system. DentalCraft then appears in the applications menu. |
| `dl.installer.windows` | Adds DentalCraft to the Start menu and to Apps & features, where you can also remove it. |
| `dl.standalone.linux` | An archive to unpack in any folder. Open the dentalcraft file inside it. Nothing is installed. |
| `dl.standalone.windows` | A zip folder to unpack anywhere, even on a USB stick. Open dentalcraft.exe inside it. Nothing is installed. |
| `dl.recommended` | Recommended |
| `dl.copy` / `dl.copied` | Copy / Copied |
| `dl.terminal` | Or, in a terminal: |
| `dl.flatpak.title` | Flatpak, any distribution |
| `dl.flatpak.body` | Runs in a sandbox and updates with your other Flatpak apps. Software centres such as GNOME Software and KDE Discover open the link directly. |
| `dl.flatpak.open` | Open in your software centre |
| `dl.dnf.title` | Fedora (dnf) |
| `dl.dnf.body` | In a terminal, add the DentalCraft repository once, then install. dnf asks you to accept the signing key: check that its fingerprint matches the one at the bottom of this page. |
| `dl.rpm.link` | Or download the .rpm package |
| `dl.apt.title` | Debian and Ubuntu (apt) |
| `dl.apt.body` | In a terminal, add the signing key and the repository once, then install. |
| `dl.deb.link` | Or download the .deb package |
| `dl.appimage.title` / `.body` / `.get` | AppImage / One file for any distribution. Make it executable, then open it. / Download the AppImage |
| `dl.exe.title` / `.body` / `.get` | Setup / Installs for your user only, without administrator rights. You can add a desktop shortcut during setup. / Download the setup (.exe) |
| `dl.msi.title` / `.body` / `.get` | MSI package, for IT administrators / Installs for every user of the PC and needs administrator rights. / Download the MSI |
| `dl.msi.silent` | Silent install, from an administrator prompt: |
| `dl.targz.title` / `.body` / `.get` | Archive (.tar.gz) / Unpack it, then open dentalcraft. / Download the archive |
| `dl.zip.title` / `.body` / `.get` | Folder (.zip) / Unzip it, then open dentalcraft.exe. / Download the zip |
| `dl.keys.title` | Signatures |
| `dl.keys.body` | Packages and repositories are signed with the DentalCraft release key. Updates are signed with a separate key, which DentalCraft checks before installing them. |
| `dl.keys.fpr` / `dl.keys.gpg` / `dl.keys.minisign` | Release key fingerprint / Release key (OpenPGP) / Update key (minisign) |
| `meta.download.title` | Download DentalCraft - installer or standalone, for Linux and Windows |
| `meta.download.description` | Download the DentalCraft alpha for Linux (Flatpak, Fedora, Debian and Ubuntu, AppImage) and Windows (setup or MSI), or the standalone version. Not a medical device. |
| `meta.download.ogTitle` | Download DentalCraft - installer or standalone |
| `meta.download.ogDescription` | The DentalCraft alpha for Linux and Windows, with installer or standalone. Free of charge for non-clinical use. Not a medical device. |

## 14. What's new (download page, `/en/download/#whats-new`)

A block between the intro and the OS cards, with a link from the home page downloads section. It lists the pinned release (`site.data.json` `whatsNew` = the `new.N` keys, in order), then the earlier releases kept in `whatsNewPrevious` (version, date, keys such as `new13.N`). Rewrite it with every app release, together with the functions above.

| Key | Text |
| --- | --- |
| `new.title` | What's new in version {version} |
| `new.meta` | Released {date} |
| `new.link` | What's new in version {version} |
| `new.note` | Planning, production, export and printing are still in development, and 3D scanning is an early alpha. Printing is a preview, in alpha, and has not been checked on real prints yet. Not a medical device. Not for clinical use. |
| `new.1` | Bite registration now works with partial or low-quality bite scans. A good front part of the scan is enough: when the result is uncertain, DentalCraft registers the bite and marks it ‘to review’ instead of refusing it. It still refuses a bite scan whose position cannot be worked out, or that does not fit (a mirrored one, for example). |
| `new.2` | The bite scan is used only to put the upper and lower arches in occlusion, and it is no longer shown in the 3D view. It appears only while you pick the three points by hand. |
| `new.3` | Scans and imported models can be removed from the case. Use the bin on a row of the scan list or of the bite list, the Remove the scan button in the Selected component panel, or the Delete or Backspace key on a selected scan. DentalCraft asks you to confirm, clears what was computed from that scan, and Ctrl+Z brings it all back. |
| `new.4` | 3D teeth always produces closed models: each tooth is a closed solid, and the gum is closed with a 3 mm base. |
| `new.5` | More reliable automatic tooth numbering. A check now corrects teeth wrongly found behind the last molars and neighbouring teeth wrongly merged into one. |
| `new14.1` | The print window now takes the side that fits the teeth from the stage model saved with the export, so that side is known and not guessed from the shape of the aligner. |
| `new14.2` | When the stage model is not available and DentalCraft has to guess the fitting side from the shape, the print window warns you: check the orientation before you print. Printing is still a preview in alpha, not yet checked on real prints. |
| `new13.1` | A Settings window, opened from the menu at the top right. It gathers the general options, the workspace, updates and privacy in one place. |
| `new13.2` | A simple interface by default. With Advanced options and parameters off, which is the default, the side panels show only the automatic steps and the most useful corrections, and the menu marks the Next step to take. Turn the option on to see every parameter and technical value. |
| `new13.3` | Print the aligners directly. A new Print window prepares the aligners for the Elegoo Saturn 4 Ultra 16K: each one is turned automatically so that the side that fits the teeth faces away from the plate, supports are added on the outer side only, and each part stands on a U-shaped raft. |
| `new13.4` | The parts are arranged on the plate and sliced into GOO files with the printer's DENTAL 45 machine parameters. You save the files to a folder or a USB stick and print from the printer. Printing over the network is not available yet. |
| `new13.5` | DentalCraft keeps track of each aligner: printed, or still missing. The record is saved with the case. Printing is a preview in alpha: it has not been checked on real prints yet, so the printed aligners are not validated. |
| `new13.6` | The code is public on GitHub (source-available, under the PolyForm Noncommercial License 1.0.0) and the documentation is online at https://dnviti.github.io/dentalcraft-docs/. Both are linked from the About page and from the footer. |
