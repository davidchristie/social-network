FROM buildkite/puppeteer:v1.9.0

ENV  PATH="${PATH}:/node_modules/.bin"

WORKDIR /app

COPY . .

RUN curl http://web-client:3000

CMD ["sh", "-c", "yarn end-to-end test"]
