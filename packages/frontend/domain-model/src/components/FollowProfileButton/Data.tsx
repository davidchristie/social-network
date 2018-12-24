import { Alert, Loading } from "design-system";
import React from "react";
import { Mutation, MutationUpdaterFn } from "react-apollo";
import {
  Account,
  FollowProfile,
  FollowProfileVariables,
  UnfollowProfile,
  UnfollowProfileVariables
} from "../../generated/types";
import FOLLOW_PROFILE_MUTATION from "../../mutations/FollowProfile";
import UNFOLLOW_PROFILE_MUTATION from "../../mutations/UnfollowProfile";
import ACCOUNT_QUERY from "../../queries/Account";
import AccountQuery from "../AccountQuery";
import { Props as ContentProps } from "./Content";

interface Props {
  content: React.StatelessComponent<ContentProps>;
  profileId: string;
}

const updateAfterFollow: MutationUpdaterFn<FollowProfile> = (cache, { data }) => {
  const cacheData = cache.readQuery<Account>({
    query: ACCOUNT_QUERY,
  });
  if (cacheData && cacheData.account && data) {
    cacheData.account.profile.following.push(data.followProfile);
    cache.writeQuery({
      data: cacheData,
      query: ACCOUNT_QUERY,
    });
  }
};

const updateAfterUnfollow: MutationUpdaterFn<UnfollowProfile> = (cache, { data }) => {
  const cacheData = cache.readQuery<Account>({
    query: ACCOUNT_QUERY,
  });
  if (cacheData && cacheData.account && data) {
    cacheData.account.profile.following = cacheData.account.profile.following
      .filter(({ id }) => id !== data.unfollowProfile.id);
    cache.writeQuery({
      data: cacheData,
      query: ACCOUNT_QUERY,
    });
  }
};

const Data: React.StatelessComponent<Props> = ({ content, profileId }) => {
  const Content = content;
  return (
    <AccountQuery>
      {({ data, error, loading }) => {
        if (error) {
          return <Alert>{error.message}</Alert>;
        }
        if (loading || !data || !data.account) {
          return <Loading />;
        }
        const { account } = data;
        return (
          <Mutation<FollowProfile, FollowProfileVariables>
            mutation={FOLLOW_PROFILE_MUTATION}
            update={updateAfterFollow}
            variables={{
              id: profileId,
            }}
          >
            {followProfile => (
              <Mutation<UnfollowProfile, UnfollowProfileVariables>
                mutation={UNFOLLOW_PROFILE_MUTATION}
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
    </AccountQuery>
  );
};

export default Data;
