import { GraphQLServer } from "graphql-yoga";
import { createContext } from "public-api-context";

import resolvers from "./resolvers";

const server = new GraphQLServer({
  context: createContext(),
  resolvers,
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
