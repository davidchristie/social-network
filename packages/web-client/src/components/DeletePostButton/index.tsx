import React from "react";
import { Mutation, Query } from "react-apollo";

import DeletePostMutation, {
  DeletePostData,
  DeletePostVariables,
} from "../../mutations/DeletePost";
import AccountQuery, {
  AccountData,
  AccountVariables
} from "../../queries/Account";
import ProfileQuery from "../../queries/Profile";
import Alert from "../Alert";
import Button from "../Button";

interface Props {
  postId: string;
}

export default class DeletePostButton extends React.Component<Props> {
  public render () {
    return (
      <Query<AccountData, AccountVariables>
        query={AccountQuery}
      >
        {({ data, error, loading }) => {
          if (loading) {
            return "Loading";
          }
          if (error) {
            return <Alert>{error.message}</Alert>;
          }
          const { account } = data!;
          return (
            <Mutation<DeletePostData, DeletePostVariables>
              mutation={DeletePostMutation}
              refetchQueries={[
                {
                  query: ProfileQuery,
                  variables: {
                    id: account.profile.id,
                  },
                },
              ]}
              variables={{
                id: this.props.postId,
              }}
            >
              {(deletePost) => (
                <Button onClick={() => deletePost()}>
                  Delete
                </Button>
              )}
            </Mutation>
          );
        }}
      </Query>
    );
  }
}
