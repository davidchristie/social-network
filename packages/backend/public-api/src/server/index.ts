import { GraphQLServer } from "graphql-yoga";
import { createContext } from "public-api-context";

import resolvers from "./resolvers";

export default new GraphQLServer({
  context: createContext(),
  resolvers,
  typeDefs: "./src/schema.graphql",
});
