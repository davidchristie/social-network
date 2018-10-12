FROM build-packages AS build

FROM davidchristie/puppeteer

WORKDIR /app

COPY --from=build /app .

CMD ["sh", "-c", "yarn end-to-end test"]
