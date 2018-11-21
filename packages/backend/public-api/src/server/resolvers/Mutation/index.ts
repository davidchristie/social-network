import { MutationResolvers } from "../../../generated/graphqlgen";
import createPost from "./createPost";
import deletePost from "./deletePost";
import followProfile from "./followProfile";
import login from "./login";
import signup from "./signup";
import updateAccount from "./updateAccount";
import updatePassword from "./updatePassword";
import updateProfile from "./updateProfile";

export const Mutation: MutationResolvers.Type = {
  ...MutationResolvers.defaultResolvers,
  createPost,
  deletePost,
  followProfile,
  login,
  signup,
  updateAccount,
  updatePassword,
  updateProfile,
};
