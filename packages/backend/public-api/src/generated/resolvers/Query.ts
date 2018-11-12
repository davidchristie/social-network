// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { QueryResolvers } from "../graphqlgen";

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,
  account: parent => null,
  profile: (parent, args) => null,
  profiles: (parent, args) => {
    throw new Error("Resolver not implemented");
  }
};
