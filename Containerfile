# syntax=docker/dockerfile:1
# DentalCraft marketing site.
#   stage 1: build dist/ with the dependency-free Node script (build/build.mjs)
#   stage 2: nginx-unprivileged serving dist/ on port 8080 as a non-root user
#
#   podman build -t dentalcraft-web .            # or: docker build -f Containerfile -t dentalcraft-web .
#   podman run --rm -p 8080:8080 dentalcraft-web

FROM docker.io/library/node:22-alpine AS build
ARG SITE_URL=https://dentalcraft.app
ENV SITE_URL=${SITE_URL}
WORKDIR /src
COPY package.json ./
COPY build ./build
COPY src ./src
COPY content ./content
COPY brand ./brand
COPY design/assets ./design/assets
COPY media/video ./media/video
RUN node build/build.mjs

FROM docker.io/nginxinc/nginx-unprivileged:stable-alpine
LABEL org.opencontainers.image.title="dentalcraft-web" \
      org.opencontainers.image.description="DentalCraft marketing site (static, EN/IT)" \
      org.opencontainers.image.source="https://github.com/dnviti-personal-org/dentalcraft-web"
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY nginx/security-headers.conf /etc/nginx/snippets/security-headers.conf
COPY --from=build /src/dist /usr/share/nginx/html
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1:8080/healthz || exit 1
