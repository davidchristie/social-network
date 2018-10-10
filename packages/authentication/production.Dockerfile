FROM node:9.11.2 AS build

WORKDIR /app

COPY ./packages/authentication ./packages/authentication
COPY ./packages/data-model ./packages/data-model
COPY ./package.json .
COPY ./tsconfig.json .
COPY ./yarn.lock .

RUN yarn --frozen-lockfile
RUN yarn data-model build
RUN yarn authentication build

FROM node:9.11.2

EXPOSE 5000

COPY --from=build /app /app

WORKDIR /app/packages/authentication

CMD ["node", "dist/index.js"]
