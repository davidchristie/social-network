FROM davidchristie/puppeteer

WORKDIR /app

COPY . .

CMD ["yarn", "end-to-end" "test"]
