FROM node:9.11.2-alpine AS build

WORKDIR /app

COPY ./packages/tasks/integration-tests ./packages/tasks/integration-tests
COPY ./scripts ./scripts
COPY ./package.json .
COPY ./tsconfig.json .
COPY ./yarn.lock .

RUN yarn --frozen-lockfile

FROM davidchristie/puppeteer

WORKDIR /app

COPY --from=build /app .

ENTRYPOINT ["sh", "-c", "yarn integration-tests start"]
