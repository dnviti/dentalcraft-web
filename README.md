# dentalcraft-web

DentalCraft marketing website: a static site in English and Italian, with its brand kit and media. Plain HTML and CSS, about 120 lines of vanilla JS, no framework, no runtime dependencies.

> In development · Not a medical device · Not for clinical use

## Layout

| Path | Content |
| --- | --- |
| `build/` | `build.mjs` (the build) and `templates.mjs` (HTML templates). Node >= 18, no dependencies |
| `src/styles/site.css` | All CSS. Tokens as custom properties, mobile first (breakpoints 768 and 1200) |
| `src/scripts/` | `site.js` (menu, language links, current section, video) and `redirect.js` (root page) |
| `src/assets/` | Self-hosted fonts (Atkinson Hyperlegible Next, B612 Mono; woff2, Latin subset) and screenshot WebPs |
| `content/` | `site.en.json`, `site.it.json` (copy, same keys), `site.data.json` (statuses), `site-copy.*.md` (editorial copy), `video-script.md` |
| `design/` | FigCraft source, `site-spec.md`, `web-tokens.json`, reference PNGs, hero art |
| `brand/` | Brand kit: logos, favicons, Open Graph image, tokens |
| `media/video/` | Presentation video (WebM, 720p MP4), poster, EN/IT captions. Other files there are source material and are not shipped |
| `media/music/` | Music for the video. Not used on the site |
| `nginx/`, `Containerfile` | Static server image |
| `.github/workflows/image.yml` | Builds and pushes the image to ghcr |

## Build

```sh
node build/build.mjs            # writes dist/
SITE_URL=https://example.org node build/build.mjs   # absolute URLs in canonical, hreflang, sitemap, Open Graph
```

`SITE_URL` defaults to `https://dentalcraft.app`. The build:

- generates `/en/`, `/it/`, `/en/about/`, `/it/about/`, the root redirect page `/`, `404.html`, `sitemap.xml`, `robots.txt`;
- fails when the EN and IT copy keys differ, when a copy key is missing, or when an internal link or asset does not exist;
- writes CSS, JS, fonts, images and brand SVGs to `dist/assets/` with a content hash in the name;
- copies the favicon set to the root and the five video files to `dist/media/video/`.

## Run locally

```sh
npm run serve                   # build, then http://127.0.0.1:8080/
# or
node build/build.mjs && python3 -m http.server 8080 --directory dist
```

With `python3 -m http.server` the `/en` redirect and the `.vtt` content type differ from the container. Use the container to check headers.

## Container

```sh
podman build -t dentalcraft-web -f Containerfile .        # docker build works the same
podman run --rm -p 8080:8080 dentalcraft-web              # http://127.0.0.1:8080/
curl -i http://127.0.0.1:8080/healthz                     # 200 ok
```

Stage 1 (`node:22-alpine`) runs the build. Stage 2 is `nginxinc/nginx-unprivileged:stable-alpine`: port 8080, non-root (uid 101), gzip, and:

| Path | Cache-Control |
| --- | --- |
| `/assets/*` (content-hashed) | `public, max-age=31536000, immutable` |
| `/media/*` (video, captions, poster) | `public, max-age=604800` |
| favicons, manifest, robots, sitemap | `public, max-age=86400` |
| HTML | `public, max-age=300, must-revalidate` |
| `/healthz` | `no-store`, returns 200 `ok` |

Every response carries a CSP that allows `self` only (no inline script or style), `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `X-Frame-Options: DENY` and a restrictive `Permissions-Policy`. TLS and HSTS belong to the reverse proxy in front. Set `--build-arg SITE_URL=...` for the public host name.

## Deploy

Pushes to `main`, `v*` tags and manual runs trigger `.github/workflows/image.yml` on the `golgari-dev` runner (the same ARC scale set with Docker-in-Docker as `dentalcraft-server`). It pushes `ghcr.io/dnviti-personal-org/dentalcraft-web` with the tags `latest`, `sha-<short>` and, on a `v1.2.3` tag, `1.2.3`. Run the image behind the proxy of your choice and point `/healthz` at the health check.

## Editing

- **Copy**: edit `content/site.en.json` and `content/site.it.json` together. Keep `content/site-copy.*.md` in step (it is the editorial text; the JSON is what the build reads).
- **Statuses** (Exists today / In progress / Planned): one place, `content/site.data.json`. It feeds the EN and IT pages. Only the Aligners stage "Case" is In progress today; every other stage is Planned.
- **Video**: replace the files in `media/video/` keeping the names. The page uses `preload="none"` with `poster.jpg`, never autoplays, and turns the Italian captions on by default (both pages: the video carries English on-screen text).
- **Screenshots**: the second one (Aligners workspace) is a design mock, not a capture. Replace `src/assets/img/aligners-{en,it}-{960,1920}.webp` with real captures before launch.

## Privacy

The site sets no cookies, loads nothing from third parties, has no forms and no analytics. The only thing stored is the language choice, in the visitor's own `localStorage` (`dc-lang`), so that `/` can open in the right language. The privacy note is on the About page (`#privacy`), EN and IT.

## Open points

- The presentation video (scene 7 and its captions) still lists "scan import" among the things that exist today. The site shows Scan import as In progress. The video needs an edit to match.
- The site reads "Follow the development" as a jump to Downloads. There is no sign-up (no back end), so it leads to the contact address and the news-on-this-page text.
- Light theme is not designed. The site is dark only.
- `SITE_URL` assumes `https://dentalcraft.app`. Change it if the host differs.

## Part of DentalCraft

This repository is a submodule of the `dentalcraft` superproject, next to `dentalcraft-core`, `dentalcraft-aligners`, `dentalcraft-app` and `dentalcraft-server`.
