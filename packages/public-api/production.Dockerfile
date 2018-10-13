FROM node:9.11.2-alpine AS build

WORKDIR /app

COPY ./packages/data-model ./packages/data-model
COPY ./packages/public-api ./packages/public-api
COPY ./package.json .
COPY ./tsconfig.json .
COPY ./yarn.lock .

RUN yarn --frozen-lockfile --production

FROM node:9.11.2-alpine

EXPOSE 4000

COPY --from=build /app /app

WORKDIR /app/packages/public-api

ENTRYPOINT ["node", "dist/index.js"]
