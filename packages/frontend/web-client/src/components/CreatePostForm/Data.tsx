import { Alert, Loading } from "design-system";
import React from "react";
import { Mutation, Query } from "react-apollo";
import CreatePostMutation, {
  CreatePostData,
  CreatePostVariables,
} from "../../mutations/CreatePost";
import AccountQuery, {
  AccountData,
  AccountVariables
} from "../../queries/Account";
import ProfileQuery from "../../queries/Profile";
import { Props as ContentProps } from "./Content";

interface Props {
  content: React.ComponentType<ContentProps>;
}

const Data: React.ComponentType<Props> = ({ content }) => {
  const Content = content;
  return (
    <Query<AccountData, AccountVariables>
      query={AccountQuery}
    >
      {({ data, error, loading }) => {
        if (loading || !data || !data.account) {
          return <Loading />;
        }
        if (error) {
          return <Alert>{error.message}</Alert>;
        }
        const { account } = data;
        return (
          <Mutation<CreatePostData, CreatePostVariables>
            mutation={CreatePostMutation}
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
    </Query>
  );
};

export default Data;
