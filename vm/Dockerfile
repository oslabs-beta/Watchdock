FROM --platform=$BUILDPLATFORM node:18.9-alpine3.16 AS builder

#Creating a user for accesing the backend
RUN addgroup app && adduser -S -G app app
USER app

#Creaing a directory for the backend and copyin gover the package.json
WORKDIR /backend
COPY package.json /backend/

#Installing dependencies and then adding all other files in vm
RUN npm i
COPY  .. /backend/

#Building production build
RUN npm run build

EXPOSE 8080