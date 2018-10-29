import { GraphQLServer } from "graphql-yoga";

import server from ".";

it("exports a GraphQL server", () => {
  expect(server).toBeInstanceOf(GraphQLServer);
});
