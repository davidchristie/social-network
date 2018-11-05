FROM node:10-alpine AS build

WORKDIR /app

# Install dependencies
COPY ./packages/backend/data-model/package.json ./packages/backend/data-model/package.json
COPY ./packages/backend/public-api/package.json ./packages/backend/public-api/package.json
COPY ./package.json .
COPY ./yarn.lock .
RUN yarn --production

# Copy source code
COPY ./packages/backend/data-model ./packages/backend/data-model
COPY ./packages/backend/public-api ./packages/backend/public-api
COPY ./tsconfig.json .

FROM node:10-alpine

EXPOSE 4000

COPY --from=build /app /app

WORKDIR /app/packages/backend/public-api

ENTRYPOINT ["node", "dist/index.js"]
