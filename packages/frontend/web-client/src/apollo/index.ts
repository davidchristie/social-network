import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";

import cache from "./cache";
import authenticationLink from "./links/authentication";
import httpLink from "./links/http";

export default new ApolloClient({
  cache,
  link: ApolloLink.from([
    authenticationLink,
    httpLink,
  ]),
});
