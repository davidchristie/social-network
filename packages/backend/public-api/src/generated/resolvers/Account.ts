// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { AccountResolvers } from "../graphqlgen";

export const Account: AccountResolvers.Type = {
  ...AccountResolvers.defaultResolvers,

  profile: parent => {
    throw new Error("Resolver not implemented");
  }
};
