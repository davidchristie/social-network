FROM node:10-alpine as build

WORKDIR /app

# Install dependencies
COPY ./packages/tasks/integration-tests/package.json ./packages/tasks/integration-tests/package.json
COPY ./package.json .
COPY ./yarn.lock .
RUN yarn

# Copy source code
COPY ./packages/tasks/integration-tests ./packages/tasks/integration-tests
COPY ./tsconfig.json .

COPY ./scripts ./scripts

FROM davidchristie/puppeteer

WORKDIR /app

COPY --from=build /app .

ENTRYPOINT ["sh", "-c", "yarn integration-tests start"]
