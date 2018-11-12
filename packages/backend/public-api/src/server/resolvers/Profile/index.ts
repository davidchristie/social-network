import { ProfileResolvers } from "../../../generated/graphqlgen";

export const Profile: ProfileResolvers.Type = {
  ...ProfileResolvers.defaultResolvers,
  avatar: ({ id }, { }, context) => {
    return context.database.profile({ id }).avatar();
  },
  posts: ({ id }, { }, context) => {
    return context.database.profile({ id }).posts();
  },
};
