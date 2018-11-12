import { PostResolvers } from "../../../generated/graphqlgen";

export const Post: PostResolvers.Type = {
  ...PostResolvers.defaultResolvers,
  createdBy: ({ id }, { }, context) => {
    return context.database.post({ id }).createdBy();
  },
};
