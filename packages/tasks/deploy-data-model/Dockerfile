FROM node:10-alpine

WORKDIR /app

RUN apk --no-cache add curl

# Install dependencies
COPY ./packages/backend/data-model/package.json ./packages/backend/data-model/package.json
COPY ./package.json .
COPY ./yarn.lock .
RUN yarn

# Copy source code
COPY ./packages/backend/data-model ./packages/backend/data-model

COPY ./scripts ./scripts

ENTRYPOINT ["sh", "-c", "yarn wait-for-prisma && yarn data-model deploy && yarn data-model seed"]
