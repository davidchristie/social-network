import { Alert, Loading } from "design-system";
import React from "react";
import { Query } from "react-apollo";
import ProfileQuery, {
  ProfileData,
  ProfileVariables
} from "../../queries/Profile";
import Content from "./Content";

interface Props {
  profileId: string;
}

export default class ProfilePosts extends React.Component<Props> {
  public render () {
    return (
      <Query<ProfileData, ProfileVariables>
        variables={{
          id: this.props.profileId,
        }}
        query={ProfileQuery}
      >
        {({ data, error, loading }) => {
          if (error) {
            return <Alert>{error.message}</Alert>;
          }
          if (!data || loading) {
            return <Loading />;
          }
          const { profile } = data;
          return <Content profile={profile} />;
        }}
      </Query>
    );
  }
}
