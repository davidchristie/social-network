import { ProfileResolvers } from "../../../generated/graphqlgen";

export const Profile: ProfileResolvers.Type = {
  ...ProfileResolvers.defaultResolvers,
  avatar: ({ id }, { }, context) => {
    return context.database.profile({ id }).avatar();
  },
  followers: ({ id }, { }, context) => {
    return context.database.profile({ id }).followers();
  },
  following: ({ id }, { }, context) => {
    return context.database.profile({ id }).following();
  },
  posts: ({ id }, { }, context) => {
    return context.database.profile({ id }).posts();
  },
};
