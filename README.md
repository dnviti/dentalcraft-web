# dentalcraft-web

DentalCraft marketing website: a static site in English and Italian, with its brand kit and media. Plain HTML and CSS, about 120 lines of vanilla JS, no framework, no runtime dependencies.

> In development · Not a medical device · Not for clinical use

## Layout

| Path | Content |
| --- | --- |
| `build/` | `build.mjs` (the build), `templates.mjs` (HTML templates), `release.mjs` (release files, key and signature checks, Linux setup files), `pin-release.mjs` (pins a release in `site.data.json`), `linux-repos.sh` (signed APT, RPM and Flatpak repositories, run in the image build). Node >= 18, no dependencies |
| `src/styles/site.css` | All CSS. Tokens as custom properties, mobile first (breakpoints 768 and 1200) |
| `src/scripts/` | `site.js` (menu, language links, current section, video, copy buttons) and `redirect.js` (root page) |
| `src/assets/` | Self-hosted fonts (Atkinson Hyperlegible Next, B612 Mono; woff2, Latin subset) and screenshot WebPs |
| `content/` | `site.en.json`, `site.it.json` (copy, same keys), `site.data.json` (statuses, pinned release), `licence.md` (end-user licence agreement, Italian and English, rendered by the licence pages), `site-copy.*.md` (editorial copy), `video-script.md` |
| `keys/` | Public keys of DentalCraft Releases: `dentalcraft.gpg` (OpenPGP, signs packages and repositories) and `dentalcraft.minisign.pub` (signs the update manifest). Served at `/keys/` |
| `linux/` | `dentalcraft.list`, `dentalcraft.repo`: APT and DNF repository definitions, single source for the site and the packages |
| `design/` | FigCraft source, `site-spec.md`, `web-tokens.json`, reference PNGs, hero art |
| `brand/` | Brand kit: logos, favicons, Open Graph image, tokens |
| `media/video/` | Presentation video (WebM, 720p MP4), poster, EN/IT captions. Other files there are source material and are not shipped |
| `media/music/` | Music for the video. Not used on the site |
| `downloads/` | Files of the app release, fetched from it. Git-ignored (see Downloads) |
| `nginx/`, `Containerfile` | Site image: build, repository stages, static server |
| `.github/workflows/image.yml` | Builds and pushes the image to ghcr |

## Build

```sh
node build/build.mjs            # writes dist/
SITE_URL=https://example.org node build/build.mjs   # absolute URLs in canonical, hreflang, sitemap, Open Graph
```

`SITE_URL` defaults to `https://dentalcraft.app`. The build:

- generates `/en/`, `/it/`, `/en/about/`, `/it/about/`, `/en/download/`, `/it/download/`, `/en/licence/`, `/it/licence/`, the root redirect page `/`, `404.html`, `sitemap.xml`, `robots.txt`;
- fails when the EN and IT copy keys differ, when a copy key is missing, or when an internal link or asset does not exist;
- writes CSS, JS, fonts, images and brand SVGs to `dist/assets/` with a content hash in the name;
- copies the favicon set to the root and the five video files to `dist/media/video/`;
- checks every release file in `downloads/` (size and SHA-256 against `content/site.data.json`), copies the served ones to `dist/download/` and writes the checksums file there;
- verifies the minisign signature of the release's `update.json` with `keys/dentalcraft.minisign.pub`, checks that it points only at served files, and publishes it as `/update/stable.json` (+ `.minisig`);
- copies `keys/` to `dist/keys/` and writes the one-time setup files `/linux/dentalcraft.list`, `/linux/dentalcraft.repo`, `/linux/dentalcraft.flatpakrepo` and `/linux/DentalCraft.flatpakref` for the package kinds the release has.

The signed repositories themselves are made by the image build (see Linux repositories), not by `build.mjs`.

## Run locally

```sh
npm run serve                   # build, then http://127.0.0.1:8080/
# or
node build/build.mjs && python3 -m http.server 8080 --directory dist
```

With `python3 -m http.server` the `/en` redirect and the `.vtt` content type differ from the container. Use the container to check headers.

## Container

```sh
podman build --secret id=gpg,src=<armored secret key> -t dentalcraft-web -f Containerfile .   # docker build works the same
podman run --rm -p 127.0.0.1:8080:8080 dentalcraft-web   # http://127.0.0.1:8080/
curl -i http://127.0.0.1:8080/healthz                     # 200 ok
```

Stages: `build` (`node:22-alpine`) runs `build.mjs`; `apt` (`debian:trixie-slim`) and `rpm` (`fedora:45`) run `build/linux-repos.sh`; the final stage is `nginxinc/nginx-unprivileged:stable-alpine`: port 8080, non-root (uid 101), gzip for text only, and:

| Path | Cache-Control |
| --- | --- |
| `/assets/*` (content-hashed) | `public, max-age=31536000, immutable` |
| `/media/*` (video, captions, poster) | `public, max-age=604800` |
| `/download/*` (release files, versioned names) | `public, max-age=31536000, immutable`, `Content-Disposition: attachment`, `X-Robots-Tag: noindex` |
| `/linux/apt/pool/*.deb`, `/linux/rpm/*.rpm` (aliases of `/download/`), `/linux/flatpak/objects/`, `/linux/flatpak/deltas/` | `public, max-age=31536000, immutable` |
| `/linux/*` (repository metadata, setup files) | `public, max-age=300, must-revalidate` |
| `/update/*` (update manifest and signature) | `no-cache` |
| `/keys/*`, favicons, manifest, robots, sitemap | `public, max-age=86400` |
| HTML | `public, max-age=300, must-revalidate` |
| `/healthz` | `no-store`, returns 200 `ok` |

Content types beyond the nginx defaults: `.flatpakref` `application/vnd.flatpak.ref`, `.flatpakrepo` `application/vnd.flatpak.repo`, `.AppImage` `application/vnd.appimage`, `.gpg` `application/pgp-keys`, `.asc` `application/pgp-signature`, `.minisig`, `.pub`, `.list`, `.repo` `text/plain`. There is no directory listing.

Every response carries a CSP that allows `self` only (no inline script or style), `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `X-Frame-Options: DENY` and a restrictive `Permissions-Policy`. TLS and HSTS belong to the reverse proxy in front. Set `--build-arg SITE_URL=...` for the public host name: the setup files and the commands on the download page use it.

## Downloads

The download page `/en/download/` (`/it/download/`) offers, per operating system, an **Installer** and a **Standalone** version. Everything is served by the site itself, baked into the image; the GitHub repositories are private and nothing points at them.

| | Installer | Standalone |
| --- | --- | --- |
| Linux | Flatpak (`.flatpakref` + repository), Fedora (dnf repository), Debian and Ubuntu (apt repository), AppImage | `dentalcraft_<V>_linux_x86_64.tar.gz` |
| Windows | `DentalCraft-<V>-setup.exe` (per user, recommended), `DentalCraft-<V>-x86_64.msi` (per machine, for administrators) | `dentalcraft_<V>_windows_x86_64.zip` |

The page lists only the kinds present in the pinned release; a release with archives only shows the installer column as "Not available yet". The Windows files are not code-signed: the page says SmartScreen may warn (More info, then Run anyway). The home page cards link to the download page.

- `content/site.data.json`, block `release`: version, repo, tag, date, checksum file, and per kind (`linux`, `windows`, `appimage`, `deb`, `rpm`, `flatpak`, `exe`, `msi`, `update`, `updateSig`) the file name, size and SHA-256. The names are fixed (see `build/release.mjs`).
- `downloads/` (git-ignored) holds the release files. `node build/build.mjs` fails if one is missing or differs from the pin. Fetch them with your own `gh` login, then pin a new release:

  ```sh
  gh release download v0.3.0 -R dnviti-personal-org/dentalcraft-app -D downloads
  node build/pin-release.mjs downloads     # rewrites only the release block, from the release's SHA256SUMS file
  ```

- CI (`image.yml`) downloads the same files before the image build, with the repository secret `APP_RELEASE_TOKEN`: a fine-grained personal access token with read-only `Contents` access to `dnviti-personal-org/dentalcraft-app`. Without it the job stops with a clear message.
- One copy of each payload: the `.deb` and `.rpm` live in `/download/` and nginx serves them under the repository paths too; the `.flatpak` bundle is not served (it only feeds the OSTree repository). Every repository holds only the pinned release.
- `/releases` redirects to `/en/download/`, because the app links to it.
- No macOS build yet: the card stays disabled.

## Keys

Generated once on 2026-11-15, kept only in `~/.config/dentalcraft-release/` on the release workstation (directory 0700, files 0600). Never commit the secret halves.

| Key | Secret | Public | Used for |
| --- | --- | --- | --- |
| OpenPGP ed25519 `DentalCraft Releases <releases@dentalcraft.app>`, fingerprint `83B0 A31C A19D E14A 1648 A875 C10C E2EB 009D E538`, no passphrase, no expiry | `gpg/` (a dedicated `GNUPGHOME`) | `keys/dentalcraft.gpg` | RPM package signatures (app release job), APT `InRelease`/`Release.gpg`, RPM `repomd.xml.asc`, Flatpak commit and summary (image build) |
| minisign ed25519, key id `B155D07CF2A36DB0`, no password | `minisign.key` | `keys/dentalcraft.minisign.pub`, also embedded in the app | `update.json.minisig` (app release job, `dentalcraft-app/packaging/update-manifest.py`) |

CI secrets (names; set them only when the runners come back): web repo `DENTALCRAFT_GPG_KEY` (armored secret key: `GNUPGHOME=~/.config/dentalcraft-release/gpg gpg --armor --export-secret-keys 83B0A31CA19DE14A1648A875C10CE2EB009DE538`); app repo `DENTALCRAFT_GPG_KEY` and `DENTALCRAFT_MINISIGN_KEY` (contents of `minisign.key`). Locally `scripts/release-local.sh` reads the keys directory instead.

## Linux repositories

Built by `build/linux-repos.sh` in the image build, signed with the build secret `gpg`, which must be the key of `keys/dentalcraft.gpg` (the script checks the fingerprint). A release without a package of a kind skips that repository, and then needs no secret.

| Path | Content | Users add it with |
| --- | --- | --- |
| `/linux/apt/` | `dists/stable/{InRelease,Release,Release.gpg}`, `main/binary-amd64/Packages(.gz)`; packages at `pool/<deb>` | `/linux/dentalcraft.gpg` (binary keyring) saved as `/usr/share/keyrings/dentalcraft.gpg`, then `/linux/dentalcraft.list` |
| `/linux/rpm/` | `repodata/` (`repomd.xml.asc`, no sqlite); packages at `/linux/rpm/<rpm>`, signed by the app release job (the build refuses an unsigned one) | `dnf config-manager addrepo --from-repofile=…/linux/dentalcraft.repo` (`gpgcheck` and `repo_gpgcheck` on) |
| `/linux/flatpak/` | OSTree repository (archive-z2) imported from the bundle: ref `app/com.dentalcraft.DentalCraft/x86_64/stable`, signed commit and summary, no static deltas | `flatpak install --from …/linux/DentalCraft.flatpakref` or `/linux/dentalcraft.flatpakrepo`; the runtime comes from Flathub (`RuntimeRepo`) |

`linux/dentalcraft.list` and `linux/dentalcraft.repo` in this repo are the single source of the APT and DNF repository definitions. The deb and rpm install byte-identical copies (`/etc/apt/sources.list.d/dentalcraft.list` with the keyring `/usr/share/keyrings/dentalcraft.gpg`, and `/etc/yum.repos.d/dentalcraft.repo`), so a package downloaded by hand keeps updating, and installing it over the one-time setup raises no configuration-file prompt. `dentalcraft-app/packaging/linux/` holds the copies; the app release job fails if they differ. A build with another `SITE_URL` rewrites `https://dentalcraft.app` in the served copies only.

## Update manifest

The app release carries `update.json` and `update.json.minisig`, made by `dentalcraft-app/packaging/update-manifest.py`. The site serves them as `/update/stable.json` and `/update/stable.json.minisig`. The app checks them at startup, verifies the minisign signature with its embedded key, then the SHA-256 of the file it downloads.

```json
{"version": "0.3.0", "tag": "v0.3.0", "date": "2026-11-20", "notes_url": "https://dentalcraft.app/en/download/",
 "assets": {"linux-standalone": {"url": "https://dentalcraft.app/download/<file>", "sha256": "…", "size": 123},
            "appimage": {…}, "windows-standalone": {…}, "windows-exe": {…}, "windows-msi": {…}}}
```

Check one by hand: `minisign -Vm stable.json -p keys/dentalcraft.minisign.pub`.

## Deploy

Pushes to `main`, `v*` tags and manual runs trigger `.github/workflows/image.yml` on the `golgari-dev` runner (the same ARC scale set with Docker-in-Docker as `dentalcraft-server`). It pushes `ghcr.io/dnviti-personal-org/dentalcraft-web` with the tags `latest`, `sha-<short>` and, on a `v1.2.3` tag, `1.2.3`. Run the image behind the proxy of your choice and point `/healthz` at the health check.

## Editing

- **Copy**: edit `content/site.en.json` and `content/site.it.json` together. Keep `content/site-copy.*.md` in step (it is the editorial text; the JSON is what the build reads).
- **Statuses** (Exists today / In progress / Planned): one place, `content/site.data.json`. It feeds the EN and IT pages. Rule: DONE in `docs/plan/PORT-GAP-MAP.md` is Exists today, PARTIAL is In progress, a function the site lists and the app lacks is Planned. Never show planning (setup, staging) or production as validated.
- **What's new**: with every app release, rewrite the `new.*` keys in both language files and the `whatsNew` list in `content/site.data.json`, together with the function texts and statuses above. The block shows on the download page (`#whats-new`) and is linked from the home downloads section.
- **Video**: replace the files in `media/video/` keeping the names. The page uses `preload="none"` with `poster.jpg`, never autoplays, and turns the Italian captions on by default (both pages: the video carries English on-screen text).
- **Screenshots**: the second one (Aligners workspace) is a design mock, not a capture. Replace `src/assets/img/aligners-{en,it}-{960,1920}.webp` with real captures before launch.

## Licence

The software is proprietary and free of charge to download and use for non-clinical purposes, under the end-user licence agreement in `content/licence.md` (holder: Daniele Viti). The licence pages `/en/licence/` and `/it/licence/` render that file, so edit the agreement there, never in the templates. The download section and the footer link to them. The source of this repository is private: see `LICENSE.md`.

## Privacy

The site sets no cookies, loads nothing from third parties, has no forms and no analytics. The only thing stored is the language choice, in the visitor's own `localStorage` (`dc-lang`), so that `/` can open in the right language. The privacy note is on the About page (`#privacy`), EN and IT. It also covers the application: it sends anonymous diagnostic data (crash reports, errors, system and graphics card, sanitised log lines, a random installation ID) to `auth.dentalcraft.app` only after the user opts in (unticked checkbox at first start, changeable in the account menu); keep the note in line with the app's diagnostics contract (what is sent, what is never sent, 90 days retention).

## Open points

- The presentation video (scene 7 and its captions, and the transcript copied from them) still says the clinical algorithms are being ported and validated. The site now shows scan import and the preparation, diagnosis and bite stages as Exists today. The video needs an edit to match.
- The header and hero buttons read "Try the alpha" and jump to Downloads. There is no sign-up (no back end).
- The Windows files are not signed; the page tells visitors to expect a SmartScreen warning.
- Light theme is not designed. The site is dark only.
- `SITE_URL` assumes `https://dentalcraft.app`. Change it if the host differs.

## Part of DentalCraft

This repository is a submodule of the `dentalcraft` superproject, next to `dentalcraft-core`, `dentalcraft-aligners`, `dentalcraft-app` and `dentalcraft-server`.
