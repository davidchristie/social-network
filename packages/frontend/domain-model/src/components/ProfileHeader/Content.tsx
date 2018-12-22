import { Avatar, Section } from "design-system";
import React from "react";
import FollowProfileButton from "../FollowProfileButton";

export interface Props {
  account: {
    profile: {
      id: string;
    };
  } | null;
  profile: {
    avatar: {
      url: string;
    } | null;
    id: string;
    name: string;
  };
}

const Content: React.StatelessComponent<Props> = ({ account, profile }) => {
  const isAuthenticated = Boolean(account);
  const isOwnProfile = account && account.profile.id === profile.id;
  return (
    <Section>
      <Avatar
        image={profile.avatar ? profile.avatar.url : undefined}
        size="large"
      />
      <h1>{profile.name}</h1>
      {isAuthenticated && !isOwnProfile && (
        <FollowProfileButton profileId={profile.id} />
      )}
    </Section>
  );
};

export default Content;
