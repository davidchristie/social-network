FROM davidchristie/puppeteer

WORKDIR /app

COPY . .

ENTRYPOINT ["sh", "-c", "yarn", "end-to-end" "test"]
