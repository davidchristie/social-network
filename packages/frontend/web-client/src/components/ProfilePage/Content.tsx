import { Container, Section } from "design-system";
import { CreatePostForm, ProfileHeader, ProfilePosts } from "domain-model";
import React from "react";

export interface Props {
  account: {
    profile: {
      id: string;
    };
  } | null;
  profile: {
    id: string;
  };
}

const Content: React.StatelessComponent<Props> = ({ account, profile }) => {
  const isOwnProfile = account && account.profile.id === profile.id;
  return (
    <Container>
      <ProfileHeader profileId={profile.id} />
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
