FROM node:10-alpine AS build

WORKDIR /app

# Install dependencies
COPY ./packages/backend/authentication/package.json ./packages/backend/authentication/package.json
COPY ./packages/backend/data-model/package.json ./packages/backend/data-model/package.json
COPY ./package.json .
COPY ./yarn.lock .
RUN yarn --production

# Copy source code
COPY ./packages/backend/authentication ./packages/backend/authentication
COPY ./packages/backend/data-model ./packages/backend/data-model
COPY ./tsconfig.json .

FROM node:10-alpine

EXPOSE 5000

WORKDIR /app/packages/backend/authentication

COPY --from=build /app /app

ENTRYPOINT ["node", "dist/index.js"]
