import { Button } from "design-system";
import React from "react";

export interface Props {
  account: {
    profile: {
      following: Array<{
        id: string;
      }>;
    };
  };
  profileId: string;
}

const Content: React.StatelessComponent<Props> = ({ account, profileId }) => {
  const isFollowing = account.profile.following.some(followed => {
    return followed.id === profileId;
  });
  return isFollowing
    ? <Button>Unfollow</Button>
    : <Button>Follow</Button>;
};

export default Content;
