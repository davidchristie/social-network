FROM davidchristie/puppeteer

WORKDIR /app

COPY ./packages/end-to-end ./packages/end-to-end
COPY ./package.json .
COPY ./yarn.lock .

RUN yarn --frozen-lockfile --production

CMD ["sh", "-c", "yarn end-to-end test"]
