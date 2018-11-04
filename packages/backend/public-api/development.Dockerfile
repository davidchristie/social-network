FROM node:10-alpine

EXPOSE 4000

WORKDIR /app/packages/backend/public-api

ENTRYPOINT ["yarn", "start"]
