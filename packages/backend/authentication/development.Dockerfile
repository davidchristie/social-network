FROM node:10-alpine

EXPOSE 5000

WORKDIR /app/packages/backend/authentication

ENTRYPOINT ["yarn", "start"]
