FROM node:10-alpine

EXPOSE 3000

WORKDIR /app/packages/frontend/web-client

ENTRYPOINT ["yarn", "start"]
