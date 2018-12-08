import { Avatar, Container, Section } from "design-system";
import { FollowProfileButton } from "domain-model";
import React from "react";
import CreatePostForm from "../CreatePostForm";
import ProfilePosts from "../ProfilePosts";

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

const Content: React.SFC<Props> = ({ account, profile }) => {
  const isAuthenticated = Boolean(account);
  const isOwnProfile = account && account.profile.id === profile.id;
  return (
    <Container>
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
      <Section>
        {isOwnProfile && (
          <CreatePostForm />
        )}
        <ProfilePosts profileId={profile.id} />
      </Section>
    </Container>
  );
};

export default Content;
