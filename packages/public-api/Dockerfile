FROM node:9.11.2

EXPOSE 4000

WORKDIR /app

COPY . .

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin

RUN yarn
RUN yarn public-api build

WORKDIR /app/packages/public-api

CMD ["node", "dist/index.js"]
