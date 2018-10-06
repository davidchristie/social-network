FROM buildkite/puppeteer:v1.9.0

ENV  PATH="${PATH}:/node_modules/.bin"

WORKDIR /app

COPY . .

# COPY ./packages/end-to-end/src ./packages/end-to-end/src
# COPY ./packages/end-to-end/package.json ./packages/end-to-end
# COPY ./packages/end-to-end/tsconfig.json ./packages/end-to-end
# COPY ./package.json .
# COPY ./tsconfig.json .
# COPY ./yarn.lock .

# RUN yarn

CMD ["sh", "-c", "yarn end-to-end test"]
