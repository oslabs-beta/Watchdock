FROM --platform=$BUILDPLATFORM node:18.9-alpine3.16 AS Watchdock

LABEL "com.docker.desktop.extension.api.version"="0.3.4"

WORKDIR /vm

COPY vm /vm
    
WORKDIR /

WORKDIR /ui

COPY ui /ui

WORKDIR /

COPY vm/package.json /vm/
COPY ui/package.json /ui/
COPY metadata.json .
COPY docker.svg .

CMD ["npm", "start"]
