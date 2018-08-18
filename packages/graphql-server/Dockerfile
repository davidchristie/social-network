FROM node:9.11.2 AS build
WORKDIR /app
COPY . .
ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin
RUN yarn
CMD [ "yarn", "workspace", "graphql-server", "build" ]

FROM node:9.11.2
WORKDIR /app
COPY --from=build /app/dist .
COPY --from=build /app/node_modules node_modules
COPY --from=build /app/packages/graphql-server/src/schema.graphql src/schema.graphql
COPY --from=build /app/packages/graphql-server/src/generated/prisma.graphql src/generated/prisma.graphql
CMD ["node", "index.js"]
