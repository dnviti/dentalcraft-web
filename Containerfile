# syntax=docker/dockerfile:1
# DentalCraft site.
#   stage build:  dist/ with the dependency-free Node script (build/build.mjs); checks the release files
#   stage apt:    signed APT repository metadata for the release's .deb      (build/linux-repos.sh)
#   stage rpm:    signed RPM repository metadata and the Flatpak OSTree repo   (build/linux-repos.sh)
#   final:        nginx-unprivileged serving all of it on port 8080 as a non-root user
#
# The repositories are signed with the build secret "gpg" (armored secret key of DentalCraft Releases):
#   podman build --secret id=gpg,src=<key.asc> -t dentalcraft-web .
#   podman run --rm -p 127.0.0.1:8080:8080 dentalcraft-web
# Without packages in the pinned release (content/site.data.json) the secret is not needed.

FROM docker.io/library/node:22-alpine AS build
ARG SITE_URL=https://dentalcraft.app
ENV SITE_URL=${SITE_URL}
WORKDIR /src
COPY package.json ./
COPY build ./build
COPY src ./src
COPY content ./content
COPY keys ./keys
COPY linux ./linux
COPY brand ./brand
COPY design/assets ./design/assets
COPY media/video ./media/video
# Release files of the app, fetched by CI (or by hand, see README): the build verifies them against content/site.data.json
COPY downloads ./downloads
RUN node build/build.mjs

FROM docker.io/library/debian:trixie-slim AS apt
RUN apt-get update \
 && apt-get install -y --no-install-recommends apt-utils gnupg \
 && rm -rf /var/lib/apt/lists/*
COPY build/linux-repos.sh /usr/local/bin/linux-repos.sh
COPY keys/dentalcraft.gpg /src/keys/dentalcraft.gpg
COPY --from=build /src/dist/download /in
RUN --mount=type=secret,id=gpg linux-repos.sh apt /in /out

FROM registry.fedoraproject.org/fedora:45 AS rpm
RUN dnf -y install --setopt=install_weak_deps=False createrepo_c flatpak gnupg2 ostree \
 && dnf clean all
COPY build/linux-repos.sh /usr/local/bin/linux-repos.sh
COPY keys/dentalcraft.gpg /src/keys/dentalcraft.gpg
COPY --from=build /src/dist/download /in
COPY --from=build /src/repo-input /in-flatpak
RUN --mount=type=secret,id=gpg linux-repos.sh rpm /in /out \
 && linux-repos.sh flatpak /in-flatpak /out

FROM docker.io/nginxinc/nginx-unprivileged:stable-alpine
LABEL org.opencontainers.image.title="dentalcraft-web" \
      org.opencontainers.image.description="DentalCraft site (static, EN/IT), downloads, Linux repositories and update manifest" \
      org.opencontainers.image.source="https://github.com/dnviti/dentalcraft-web"
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY nginx/security-headers.conf /etc/nginx/snippets/security-headers.conf
COPY --from=build /src/dist /usr/share/nginx/html
COPY --from=apt /out/ /usr/share/nginx/html/
COPY --from=rpm /out/ /usr/share/nginx/html/
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1:8080/healthz || exit 1
