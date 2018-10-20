FROM node:9.11-alpine

WORKDIR /app

COPY ./packages/data-model ./packages/data-model
COPY ./scripts ./scripts
COPY ./package.json .
COPY ./yarn.lock .

RUN yarn --frozen-lockfile

RUN apk --no-cache add curl

ENTRYPOINT ["sh", "-c", "yarn wait-for-prisma && yarn data-model deploy && yarn data-model seed"]
