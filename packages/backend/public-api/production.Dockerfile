FROM node:9.11-alpine AS build

WORKDIR /app

COPY ./packages/backend/data-model ./packages/backend/data-model
COPY ./packages/backend/public-api ./packages/backend/public-api
COPY ./packages/backend/public-api-context ./packages/backend/public-api-context
COPY ./package.json .
COPY ./tsconfig.json .
COPY ./yarn.lock .

RUN yarn --frozen-lockfile --production

FROM node:9.11-alpine

EXPOSE 4000

COPY --from=build /app /app

WORKDIR /app/packages/backend/public-api

ENTRYPOINT ["node", "dist/index.js"]
