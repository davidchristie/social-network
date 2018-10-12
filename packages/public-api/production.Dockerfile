FROM build-packages AS build

WORKDIR /app

COPY --from=build /app/packages/data-model ./packages/data-model
COPY --from=build /app/packages/public-api ./packages/public-api
COPY --from=build /app/package.json .
COPY --from=build /app/tsconfig.json .
COPY --from=build /app/yarn.lock .

RUN yarn --frozen-lockfile --production

FROM node:9.11.2-alpine

EXPOSE 4000

COPY --from=build /app /app

WORKDIR /app/packages/public-api

CMD ["node", "dist/index.js"]
