import { QueryResolvers } from "../../../generated/graphqlgen";
import account from "./account";
import profile from "./profile";
import profiles from "./profiles";

const Query: QueryResolvers.Type = {
  account,
  profile,
  profiles,
};

export default Query;
