import { AccountResolvers } from "../../../generated/graphqlgen";

export const Account: AccountResolvers.Type = {
  ...AccountResolvers.defaultResolvers,
  profile: (parent, { }, context) => {
    return context.database.account({ id: parent.id }).profile();
  },
};
