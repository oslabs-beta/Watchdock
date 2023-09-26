FROM --platform=$BUILDPLATFORM node:18.9-alpine3.16 AS client-builder

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

WORKDIR /frontend
# cache packages in layer
COPY package.json /frontend
# install
RUN npm i
COPY .. /frontend/
RUN npm run build

EXPOSE 3000
