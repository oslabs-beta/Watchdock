FROM mongo AS database

WORKDIR /db
COPY . /db


FROM watchdock-frontend AS frontend

WORKDIR /ui

COPY  ui /ui

RUN npm install --no-optional

RUN npm run build



FROM watchdock-backend AS backend

WORKDIR /vm


COPY  vm /vm

RUN npm install --no-optional

RUN npm run build


FROM --platform=$BUILDPLATFORM node:18.9-alpine3.16 AS Watchdock

LABEL "com.docker.desktop.extension.api.version"="0.3.4"

COPY --from=frontend ./ui/build /ui
COPY --from=backend ./vm/build /vm
COPY --from=database . /db

COPY app.Dockerfile .
COPY package.json .
COPY metadata.json .
COPY docker-compose-setup.yaml .
COPY docker-compose.yaml .
COPY docker.svg .

CMD ["npm", "start"]
