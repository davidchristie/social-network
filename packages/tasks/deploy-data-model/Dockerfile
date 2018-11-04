FROM node:10-alpine

WORKDIR /app

COPY ./packages/backend/data-model ./packages/backend/data-model
COPY ./scripts ./scripts
COPY ./package.json .
COPY ./yarn.lock .

RUN yarn --frozen-lockfile

RUN apk --no-cache add curl

ENTRYPOINT ["sh", "-c", "yarn wait-for-prisma && yarn data-model deploy && yarn data-model seed"]
