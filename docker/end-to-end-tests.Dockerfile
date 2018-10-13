FROM davidchristie/puppeteer

WORKDIR /app

COPY . .

CMD ["sh", "-c", "yarn end-to-end test"]
