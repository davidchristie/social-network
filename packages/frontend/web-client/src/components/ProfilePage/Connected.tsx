import { Loading } from "design-system";
import React from "react";
import { Query } from "react-apollo";
import { RouteComponentProps, withRouter } from "react-router";
import AccountQuery, {
  AccountData,
  AccountVariables
} from "../../queries/Account";
import ProfileQuery, {
  ProfileData,
  ProfileVariables
} from "../../queries/Profile";
import { Props as ContentProps } from "./Content";

interface Props extends RouteComponentProps<{ id: string }> {
  content: React.ComponentType<ContentProps>;
}

const Connected: React.SFC<Props> = ({ content, match }) => {
  return (
    <Query<AccountData, AccountVariables>
      query={AccountQuery}
    >
      {accountResult => (
        <Query<ProfileData, ProfileVariables>
          variables={{
            id: match.params.id,
          }}
          query={ProfileQuery}
        >
          {profileResult => {
            if (!accountResult.data || !profileResult.data || !profileResult.data.profile) {
              return <Loading />;
            }
            const Content = content;
            const { account } = accountResult.data;
            const { profile } = profileResult.data;
            return (
              <Content account={account} profile={profile} />
            );
          }}
        </Query>
      )}
    </Query>
  );
};

export default withRouter(Connected);
