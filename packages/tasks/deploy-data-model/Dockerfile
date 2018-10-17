FROM node:9.11.2-alpine AS build

WORKDIR /app

RUN apk --no-cache add curl

ENTRYPOINT ["sh", "-c", "yarn wait-for-prisma && yarn data-model deploy && yarn data-model seed"]
