FROM puppeteer

ENV  PATH="${PATH}:/node_modules/.bin"

WORKDIR /app

COPY . .

RUN yarn

CMD ["sh", "-c", "yarn end-to-end test"]
