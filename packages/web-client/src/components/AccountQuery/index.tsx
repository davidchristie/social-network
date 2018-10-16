import React from "react";
import { Query, QueryResult } from "react-apollo";

import Account, {
  AccountData,
  AccountVariables
} from "../../queries/Account";

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
