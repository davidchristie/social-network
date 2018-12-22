import { Loading } from "design-system";
import React from "react";
import { Query } from "react-apollo";
import AccountQuery, {
  AccountData,
  AccountVariables
} from "../../queries/Account";
import ProfileQuery, {
  ProfileData,
  ProfileVariables
} from "../../queries/Profile";
import { Props as ContentProps } from "./Content";

interface Props {
  content: React.ComponentType<ContentProps>;
  profileId: string;
}

const Data: React.StatelessComponent<Props> = ({ content, profileId }) => {
  return (
    <Query<AccountData, AccountVariables>
      query={AccountQuery}
    >
      {accountResult => (
        <Query<ProfileData, ProfileVariables>
          variables={{
            id: profileId,
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

export default Data;
