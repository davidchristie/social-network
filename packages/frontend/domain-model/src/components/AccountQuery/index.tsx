import React from "react";
import { Query, QueryResult } from "react-apollo";
import { Account } from "../../generated/types";
import ACCOUNT_QUERY from "../../queries/Account";

export type Result = QueryResult<Account>;

interface Props {
  children: (result: QueryResult<Account>) => React.ReactNode;
}

const AccountQuery: React.StatelessComponent<Props> = ({ children }) => (
  <Query<Account>
    query={ACCOUNT_QUERY}
  >
    {children}
  </Query>
);

export default AccountQuery;
