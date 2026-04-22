FROM node:lts-alpine3.22 AS builder

WORKDIR /app

COPY package*.json /

RUN npm ci

COPY . .

RUN npm run build

FROM node:lts-alpine3.22

RUN npm i -g serve

COPY --from=builder /app/dist ./dist

CMD [ "serve", "-s", "dist", "-l", "3002"]