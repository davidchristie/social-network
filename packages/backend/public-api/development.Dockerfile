FROM node:9.11-alpine

EXPOSE 4000

WORKDIR /app/packages/backend/public-api

ENTRYPOINT ["yarn", "start"]
