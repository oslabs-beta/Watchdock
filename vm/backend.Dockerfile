FROM --platform=$BUILDPLATFORM node:18.9-alpine3.16 AS builder

#Creating a user for accesing the backend

#Creaing a directory for the backend and copyin gover the package.json
WORKDIR /backend

COPY  . /backend/

#Building production build
RUN chmod +x ./WatchDockSocket

EXPOSE 8080

CMD ["node", "server.js"]