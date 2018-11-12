import { GraphQLServer } from "graphql-yoga";
import { createContext } from "./context";
import { resolvers } from "./resolvers";

const server = new GraphQLServer({
  context: createContext(),
  // @TODO: Remove the cast to any once https://github.com/prisma/graphqlgen/issues/15 is resolved.
  resolvers: resolvers as any,
  typeDefs: "./src/schema.graphql",
});

// Redirect HTTP to HTTPS
server.get("*", (request, response, next) => {
  if (request.header("X-Forwarded-Proto") === "http") {
    response.redirect(301, "https://" + request.headers.host + request.url);
  }
  next();
});

export default server;
