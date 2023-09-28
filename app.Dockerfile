FROM --platform=$BUILDPLATFORM vcrbt/watchdock:latest AS app

COPY package.json .

RUN npm run install

CMD ["npm", "start"]
