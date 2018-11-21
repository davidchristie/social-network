import { Button } from "design-system";
import React from "react";
import { MutationFn } from "react-apollo";
import { FollowProfileData, FollowProfileVariables } from "../../mutations/FollowProfile";
import { UnfollowProfileData, UnfollowProfileVariables } from "../../mutations/UnfollowProfile";

export interface Props {
  account: {
    profile: {
      following: Array<{
        id: string;
      }>;
    };
  };
  followProfile: MutationFn<FollowProfileData, FollowProfileVariables>;
  profileId: string;
  unfollowProfile: MutationFn<UnfollowProfileData, UnfollowProfileVariables>;
}

const Content: React.StatelessComponent<Props> = ({
  account,
  followProfile,
  profileId,
  unfollowProfile,
}) => {
  const isFollowing = account.profile.following.some(followed => {
    return followed.id === profileId;
  });
  return isFollowing
    ? <Button onClick={() => unfollowProfile()}>Unfollow</Button>
    : <Button onClick={() => followProfile()}>Follow</Button>;
};

export default Content;
