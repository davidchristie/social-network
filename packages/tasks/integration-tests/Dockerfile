FROM node:10-alpine as build

WORKDIR /app

# Install dependencies
COPY ./packages/backend/kafka-client/package.json ./packages/backend/kafka-client/package.json
COPY ./packages/tasks/integration-tests/package.json ./packages/tasks/integration-tests/package.json
COPY ./package.json .
COPY ./yarn.lock .
RUN yarn --ignore-optional

# Copy source code
COPY ./packages/backend/kafka-client ./packages/backend/kafka-client
COPY ./packages/tasks/integration-tests ./packages/tasks/integration-tests
COPY ./tsconfig.json .

COPY ./scripts ./scripts

FROM davidchristie/puppeteer

WORKDIR /app

COPY --from=build /app .

ENTRYPOINT ["sh", "-c", "yarn integration-tests start"]
