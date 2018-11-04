FROM node:10-alpine AS build

WORKDIR /app

COPY ./packages/backend/authentication ./packages/backend/authentication
COPY ./packages/backend/data-model ./packages/backend/data-model
COPY ./package.json .
COPY ./tsconfig.json .
COPY ./yarn.lock .

RUN yarn --frozen-lockfile --production

FROM node:10-alpine

EXPOSE 5000

COPY --from=build /app /app

WORKDIR /app/packages/backend/authentication

ENTRYPOINT ["node", "dist/index.js"]
