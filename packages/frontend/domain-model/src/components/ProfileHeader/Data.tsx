import { Loading } from "design-system";
import React from "react";
import { Query } from "react-apollo";
import { Profile, ProfileVariables} from "../../generated/types";
import PROFILE_QUERY from "../../queries/Profile";
import AccountQuery from "../AccountQuery";
import { Props as ContentProps } from "./Content";

interface Props {
  content: React.ComponentType<ContentProps>;
  profileId: string;
}

const Data: React.StatelessComponent<Props> = ({ content, profileId }) => {
  return (
    <AccountQuery>
      {accountResult => (
        <Query<Profile, ProfileVariables>
          variables={{
            id: profileId,
          }}
          query={PROFILE_QUERY}
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
    </AccountQuery>
  );
};

export default Data;
