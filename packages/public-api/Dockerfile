FROM node:9.11.2 AS build
WORKDIR /app
COPY . .
ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin
RUN yarn
RUN yarn public-api build

FROM node:9.11.2
EXPOSE 4000
WORKDIR /app
COPY --from=build /app/node_modules node_modules
COPY --from=build /app/packages/public-api/dist .
COPY --from=build /app/packages/public-api/src/schema.graphql src/schema.graphql
COPY --from=build /app/packages/public-api/src/generated/prisma.graphql src/generated/prisma.graphql
CMD ["node", "index.js"]
