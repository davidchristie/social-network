FROM davidchristie/puppeteer

WORKDIR /app

COPY . .

ENTRYPOINT ["yarn", "end-to-end" "test"]
