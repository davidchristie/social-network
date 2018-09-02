import React from "react";
import { Query } from "react-apollo";

import ProfileQuery, {
  ProfileData,
  ProfileVariables
} from "../../queries/Profile";
import Alert from "../Alert";
import DeletePostButton from "../DeletePostButton";
import "./index.css";

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
            return "Loading";
          }
          if (error) {
            return <Alert>{error.message}</Alert>;
          }
          const { profile } = data!;
          return (
            <div className="ProfilePosts">
              {
                profile.posts
                  .map(post => (
                    <div className="Post" key={post.id}>
                      {post.text}
                      <hr />
                      <DeletePostButton postId={post.id} />
                    </div>
                  ))
                  .reverse()
              }
            </div>
          );
        }}
      </Query>
    );
  }
}
