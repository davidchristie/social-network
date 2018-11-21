import { Alert, Loading } from "design-system";
import React from "react";
import { Mutation, MutationUpdaterFn, Query } from "react-apollo";
import FollowProfileMutation, {
  FollowProfileData,
  FollowProfileVariables
} from "../../mutations/FollowProfile";
import UnfollowProfileMutation, {
  UnfollowProfileData,
  UnfollowProfileVariables
} from "../../mutations/UnfollowProfile";
import AccountQuery, {
  AccountData,
  AccountVariables
} from "../../queries/Account";
import { Props as ContentProps } from "./Content";

interface Props {
  content: React.StatelessComponent<ContentProps>;
  profileId: string;
}

const updateAfterFollow: MutationUpdaterFn<FollowProfileData> = (cache, { data }) => {
  const cacheData = cache.readQuery<AccountData>({
    query: AccountQuery,
  });
  if (cacheData && cacheData.account && data) {
    cacheData.account.profile.following.push(data.followProfile);
  }
  cache.writeQuery({
    data: cacheData,
    query: AccountQuery,
  });
};

const updateAfterUnfollow: MutationUpdaterFn<UnfollowProfileData> = (cache, { data }) => {
  const cacheData = cache.readQuery<AccountData>({
    query: AccountQuery,
  });
  if (cacheData && cacheData.account && data) {
    cacheData.account.profile.following = cacheData.account.profile.following
      .filter(({ id }) => id !== data.unfollowProfile.id);
  }
  cache.writeQuery({
    data: cacheData,
    query: AccountQuery,
  });
};

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
        return (
          <Mutation<FollowProfileData, FollowProfileVariables>
            mutation={FollowProfileMutation}
            update={updateAfterFollow}
            variables={{
              id: profileId,
            }}
          >
            {followProfile => (
              <Mutation<UnfollowProfileData, UnfollowProfileVariables>
                mutation={UnfollowProfileMutation}
                update={updateAfterUnfollow}
                variables={{
                  id: profileId,
                }}
              >
                {unfollowProfile => (
                  <Content
                    account={account}
                    followProfile={followProfile}
                    profileId={profileId}
                    unfollowProfile={unfollowProfile}
                  />
                )}
              </Mutation>
            )}
          </Mutation>
        );
      }}
    </Query>
  );
};

export default Data;
