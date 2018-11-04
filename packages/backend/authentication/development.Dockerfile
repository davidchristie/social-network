FROM node:9.11-alpine

EXPOSE 5000

WORKDIR /app/packages/authentication

ENTRYPOINT ["yarn", "start"]
