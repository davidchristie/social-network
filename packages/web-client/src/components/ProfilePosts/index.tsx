import { Alert, Loading } from "design-system";
import React from "react";
import { Query } from "react-apollo";

import ProfileQuery, {
  ProfileData,
  ProfileVariables
} from "../../queries/Profile";
import PostSummary from "../PostSummary";

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
          if (loading) {
            return <Loading />;
          }
          if (error) {
            return <Alert>{error.message}</Alert>;
          }
          const { profile } = data!;
          return (
            <div className="ProfilePosts">
              {
                profile.posts
                  .map(post => <PostSummary key={post.id} post={post} />)
                  .reverse()
              }
            </div>
          );
        }}
      </Query>
    );
  }
}
