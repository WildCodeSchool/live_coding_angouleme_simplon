FROM node:lts-alpine3.22 AS builder

WORKDIR /client

COPY package*.json /

RUN npm ci

COPY . .

RUN npm run build

FROM node:lts-alpine3.22

RUN npm i -g serve

COPY --from=builder /client/dist ./dist

CMD [ "serve", "-s", "dist", "-l", "3002"]