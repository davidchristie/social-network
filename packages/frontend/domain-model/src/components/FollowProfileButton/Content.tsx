import { Button } from "design-system";
import React from "react";
import { MutationFn } from "react-apollo";
import {
  FollowProfile,
  FollowProfileVariables,
  UnfollowProfile,
  UnfollowProfileVariables
} from "../../generated/types";

export interface Props {
  account: {
    profile: {
      following: Array<{
        id: string;
      }>;
    };
  };
  followProfile: MutationFn<FollowProfile, FollowProfileVariables>;
  profileId: string;
  unfollowProfile: MutationFn<UnfollowProfile, UnfollowProfileVariables>;
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
    ? (
      <Button
        onClick={() => unfollowProfile()}
        variant="contained"
      >
        Unfollow
      </Button>
    )
    : (
      <Button
        onClick={() => followProfile()}
        style="primary"
        variant="contained"
      >
        Follow
      </Button>
    );
};

export default Content;
