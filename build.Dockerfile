FROM node:9.11.2

WORKDIR /app

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin

CMD ["sh", "-c", "yarn build"]
