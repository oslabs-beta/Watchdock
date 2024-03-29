FROM --platform=$BUILDPLATFORM node:18.9-alpine3.16


WORKDIR /frontend

COPY . /frontend/

CMD ["npm", "start"]

EXPOSE 3000

