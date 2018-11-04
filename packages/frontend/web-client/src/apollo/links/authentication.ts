import { ApolloLink } from "apollo-link";

import { AUTHENTICATION_TOKEN } from "../../constants";

export default new ApolloLink((operation, forward) => {
  const token = window.localStorage.getItem(AUTHENTICATION_TOKEN);
  operation.setContext({
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  });
  return forward ? forward(operation) : null;
});
