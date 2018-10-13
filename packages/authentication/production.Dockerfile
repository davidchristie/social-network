FROM node:9.11.2-alpine AS build

WORKDIR /app

COPY ./packages/authentication ./packages/authentication
COPY ./packages/data-model ./packages/data-model
COPY ./package.json .
COPY ./tsconfig.json .
COPY ./yarn.lock .

RUN yarn --frozen-lockfile --production

FROM node:9.11.2-alpine

EXPOSE 5000

COPY --from=build /app /app

WORKDIR /app/packages/authentication

ENTRYPOINT ["node", "dist/index.js"]
