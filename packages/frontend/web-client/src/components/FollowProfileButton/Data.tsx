import { Alert, Loading } from "design-system";
import React from "react";
import { Query } from "react-apollo";
import AccountQuery, {
  AccountData,
  AccountVariables
} from "../../queries/Account";
import { Props as ContentProps } from "./Content";

interface Props {
  content: React.StatelessComponent<ContentProps>;
  profileId: string;
}

const Data: React.StatelessComponent<Props> = ({ content, profileId }) => {
  const Content = content;
  return (
    <Query<AccountData, AccountVariables>
      query={AccountQuery}
    >
      {({ data, error, loading }) => {
        if (error) {
          return <Alert>{error.message}</Alert>;
        }
        if (loading || !data || !data.account) {
          return <Loading />;
        }
        const { account } = data;
        return <Content account={account} profileId={profileId} />;
      }}
    </Query>
  );
};

export default Data;
