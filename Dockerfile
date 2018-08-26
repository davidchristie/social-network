FROM node:9.11.2

WORKDIR /app

COPY . .

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin

RUN yarn
RUN yarn build
