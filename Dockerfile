FROM --platform=$BUILDPLATFORM node:18.9-alpine3.16 AS builder
WORKDIR /backend
COPY vm/package*.json .
RUN --mount=type=cache,target=/usr/src/app/.npm \
    npm set cache /usr/src/app/.npm && \
    npm ci
COPY vm/. .

FROM --platform=$BUILDPLATFORM node:18.9-alpine3.16 AS client-builder
WORKDIR /ui
# cache packages in layer
COPY ui/package.json /ui/package.json
COPY ui/package-lock.json /ui/package-lock.json
RUN --mount=type=cache,target=/usr/src/app/.npm \
    npm set cache /usr/src/app/.npm && \
    npm ci
# install
COPY ui /ui
RUN npm run build

FROM --platform=$BUILDPLATFORM node:18.9-alpine3.16
LABEL org.opencontainers.image.title="DockerLCL" \
    org.opencontainers.image.description="A Docker Desktop extension for monitoring in-depth container metrics with a simplified CLI interface" \
    org.opencontainers.image.vendor="OSLabs Beta PTRI10 Velocirabbits" \
    com.docker.desktop.extension.api.version="0.1.0" \
    com.docker.desktop.extension.icon="https://www.flaticon.com/free-icons/container" title="container icons"\
    com.docker.extension.screenshots="" \
    com.docker.extension.detailed-description="" \
    com.docker.extension.publisher-url="" \
    com.docker.extension.additional-urls="" \
    com.docker.extension.changelog=""

COPY --from=builder /backend backend
COPY docker-compose.yaml .
COPY metadata.json .
COPY docker.svg .
COPY --from=client-builder /ui/build ui
CMD ["node", "backend/build/server.js", "/run/guest-services/extension-node-extension.sock"]
