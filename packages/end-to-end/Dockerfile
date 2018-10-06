FROM buildkite/puppeteer:v1.9.0

ENV  PATH="${PATH}:/node_modules/.bin"

WORKDIR /app

COPY ./packages/end-to-end/src ./src
COPY ./packages/end-to-end/package.json .
COPY ./packages/end-to-end/tsconfig.json .

CMD ["sh", "-c", "yarn test"]
