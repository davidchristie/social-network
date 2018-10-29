import { Prisma } from "data-model";
import { GraphQLServer } from "graphql-yoga";

import authentication from "../services/authentication";
import { Context } from "../types";
import resolvers from "./resolvers";

export default new GraphQLServer({
  context: async ({ request }): Promise<Context> => ({
    account: await authentication.account(request),
    database: new Prisma({
      debug: true,
      endpoint: process.env.PRISMA_ENDPOINT || "http://localhost:4467",
    }),
    request,
  }),
  resolvers,
  typeDefs: "./src/schema.graphql",
});
