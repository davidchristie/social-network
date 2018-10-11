FROM build-packages AS build

FROM puppeteer

WORKDIR /app

COPY --from=build . .

CMD ["sh", "-c", "yarn end-to-end test"]
