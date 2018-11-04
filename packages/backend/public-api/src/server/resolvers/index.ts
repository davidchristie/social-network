import { delegateQueryResolver } from "../utilities";
import Mutation from "./Mutation";
import Query from "./Query";

export default {
  Account: delegateQueryResolver("account", ["profile"]),
  Mutation,
  Post: delegateQueryResolver("post", ["createdBy"]),
  Profile: delegateQueryResolver("profile", ["posts"]),
  Query,
};
