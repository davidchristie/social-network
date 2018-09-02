import React from "react";
import { Query } from "react-apollo";

import ProfileQuery, {
  ProfileData,
  ProfileVariables
} from "../../queries/Profile";
import Alert from "../Alert";
import CreatePostForm from "../CreatePostForm";
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
            <div>
              <Section>
                <h1>{profile.name}</h1>
              </Section>
              <Section>
                <CreatePostForm />
              </Section>
            </div>
          );
        }}
      </Query>
    );
  }
}
