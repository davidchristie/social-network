FROM node:9.11-alpine

EXPOSE 3000

WORKDIR /app/packages/web-client

ENTRYPOINT ["yarn", "start"]
