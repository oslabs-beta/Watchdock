FROM --platform=$BUILDPLATFORM node:18.9-alpine3.16

WORKDIR /extension

LABEL org.opencontainers.image.title="WatchDock" \
    org.opencontainers.image.description="A Docker Desktop extension for monitoring in-depth container metrics with a simplified CLI interface" \
    org.opencontainers.image.vendor="OSLabs Beta PTRI10 Velocirabbits" \
    com.docker.desktop.extension.api.version="0.1.0" \
    com.docker.desktop.extension.icon="https://www.flaticon.com/free-icons/container" title="container icons"\
    com.docker.extension.screenshots="" \
    com.docker.extension.detailed-description="" \
    com.docker.extension.publisher-url="" \
    com.docker.extension.additional-urls="" \
    com.docker.extension.changelog=""

COPY package.json /extension/

RUN npm i

COPY .. /extension/

RUN \
  apk add --update --no-cache python3 && \
  pip3 install docker-compose
  
RUN docker compose up

CMD ["node", "backend/build/server.js", "/run/guest-services/extension-node-extension.sock"]
