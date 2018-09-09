import React from "react";
import { Query } from "react-apollo";

import ProfileQuery, {
  ProfileData,
  ProfileVariables
} from "../../queries/Profile";
import Alert from "../Alert";
import Container from "../Container";
import CreatePostForm from "../CreatePostForm";
import ProfilePosts from "../ProfilePosts";
import Section from "../Section";

interface Props {
  match: {
    params: {
      id: string;
    }
  };
}

export default class ProfilePage extends React.Component<Props> {
  public render () {
    return (
      <Query<ProfileData, ProfileVariables>
        variables={{
          id: this.props.match.params.id,
        }}
        query={ProfileQuery}
      >
        {({ data, error, loading }) => {
          if (loading) {
            return "Loading";
          }
          if (error) {
            return <Alert>{error.message}</Alert>;
          }
          const { profile } = data!;
          return (
            <Container>
              <Section>
                <h1>{profile.name}</h1>
              </Section>
              <Section>
                <CreatePostForm />
                <ProfilePosts profileId={profile.id} />
              </Section>
            </Container>
          );
        }}
      </Query>
    );
  }
}
