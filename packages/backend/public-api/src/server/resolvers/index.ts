import { Resolvers } from "../../generated/graphqlgen";
import { Account } from "./Account";
import { Image } from "./Image";
import { LoginPayload } from "./LoginPayload";
import { Mutation } from "./Mutation";
import { Post } from "./Post";
import { Profile } from "./Profile";
import Query from "./Query";

export const resolvers: Resolvers = {
  Account,
  Image,
  LoginPayload,
  Mutation,
  Post,
  Profile,
  Query,
};
