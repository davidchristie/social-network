import { Container, Section } from "design-system";
import {
  CreatePostForm,
  ProfileFollowers,
  ProfileFollowing,
  ProfileHeader,
  ProfilePosts
} from "domain-model";
import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

interface Props extends RouteComponentProps<{ id: string }> {}

const ProfilePage: React.StatelessComponent<Props> = ({ match }) => {
  const profileId = match.params.id;
  return (
    <Container>
      <ProfileHeader profileId={profileId} />
      <ProfileFollowers profileId={profileId} />
      <ProfileFollowing profileId={profileId} />
      <Section>
        <CreatePostForm profileId={profileId} />
        <ProfilePosts profileId={profileId} />
      </Section>
    </Container>
  );
};

export default withRouter(ProfilePage);
