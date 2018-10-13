FROM node:9.11.2-alpine AS build

WORKDIR /app

COPY ./packages/data-model ./packages/data-model
COPY ./scripts ./scripts
COPY ./package.json .
COPY ./tsconfig.json .
COPY ./yarn.lock .

RUN yarn --frozen-lockfile --production

FROM node:9.11.2-slim

COPY --from=build /app /app

WORKDIR /app

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin

CMD ["sh", "-c", "yarn wait-for-prisma && yarn data-model deploy && yarn data-model seed"]
