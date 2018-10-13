FROM node:9.11.2-alpine AS build

WORKDIR /app

COPY ./packages/end-to-end ./packages/end-to-end
COPY ./scripts ./scripts
COPY ./package.json .
COPY ./yarn.lock .

RUN yarn --frozen-lockfile

FROM davidchristie/puppeteer

WORKDIR /app

COPY --from=build /app .

ENTRYPOINT ["sh", "-c", "yarn end-to-end test"]
