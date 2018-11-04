import React from "react";
import { Query, QueryResult } from "react-apollo";

import Account, {
  AccountData,
  AccountVariables
} from "../../queries/Account";

export type Result = QueryResult<AccountData, AccountVariables>;

interface Props {
  children: (result: QueryResult<AccountData, AccountVariables>) => React.ReactNode;
}

const AccountQuery = ({ children }: Props) => (
  <Query<AccountData, AccountVariables>
    query={Account}
  >
    {children}
  </Query>
);

export default AccountQuery;
