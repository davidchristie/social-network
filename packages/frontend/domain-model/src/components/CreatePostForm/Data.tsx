import { Alert, Loading } from "design-system";
import React from "react";
import { Mutation } from "react-apollo";
import { CreatePost, CreatePostVariables } from "../../generated/types";
import CREATE_POST_MUTATION from "../../mutations/CreatePost";
import ProfileQuery from "../../queries/Profile";
import AccountQuery from "../AccountQuery";
import { Props as ContentProps } from "./Content";

interface Props {
  content: React.ComponentType<ContentProps>;
  profileId: string;
}

const Data: React.ComponentType<Props> = ({ content, profileId }) => {
  const Content = content;
  return (
    <AccountQuery>
      {({ data, error, loading }) => {
        if (error) {
          return <Alert>{error.message}</Alert>;
        }
        if (loading || !data) {
          return <Loading />;
        }
        const { account } = data;
        if (!account) {
          return null;
        }
        const isOwnProfile = account.profile.id === profileId;
        if (!isOwnProfile) {
          return null;
        }
        return (
          <Mutation<CreatePost, CreatePostVariables>
            mutation={CREATE_POST_MUTATION}
            refetchQueries={[
              {
                query: ProfileQuery,
                variables: {
                  id: account.profile.id,
                },
              },
            ]}
          >
            {createPost => (
              <Content createPost={createPost} />
            )}
          </Mutation>
        );
      }}
    </AccountQuery>
  );
};

export default Data;
