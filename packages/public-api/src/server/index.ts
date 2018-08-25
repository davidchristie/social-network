import { Prisma } from "data-model";
import { GraphQLServer } from "graphql-yoga";

import { Context } from "../types";
import resolvers from "./resolvers";

export default new GraphQLServer({
  context: ({ request }): Context => ({
    database: new Prisma({
      debug: true,
      endpoint: process.env.PRISMA_ENDPOINT,
    }),
    request,
  }),
  resolvers,
  typeDefs: "./src/schema.graphql",
});
