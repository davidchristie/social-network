import React from "react";
import { Mutation } from "react-apollo";

import DeletePostMutation, {
  DeletePostData,
  DeletePostVariables,
} from "../../mutations/DeletePost";
import ProfileQuery from "../../queries/Profile";
import AccountQuery from "../AccountQuery";
import Alert from "../Alert";
import Button from "../Button";
import ConfirmationModal from "../ConfirmationModal";

interface Props {
  postId: string;
}

interface State {
  isConfirmationModalOpen: boolean;
}

export default class DeletePostButton extends React.Component<Props, State> {
  public state = {
    isConfirmationModalOpen: false,
  };

  public render () {
    return (
      <AccountQuery>
        {({ data, error, loading }) => {
          if (loading || !data || !data.account) {
            return "Loading";
          }
          if (error) {
            return <Alert>{error.message}</Alert>;
          }
          const { account } = data;
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
                <React.Fragment>
                  <Button onClick={this.openConfirmationModal}>
                    Delete
                  </Button>
                  <ConfirmationModal
                    onClose={this.closeConfirmationModal}
                    onConfirm={() => deletePost()}
                    open={this.state.isConfirmationModalOpen}
                  >
                    Are you sure you want to delete this post?
                  </ConfirmationModal>
                </React.Fragment>
              )}
            </Mutation>
          );
        }}
      </AccountQuery>
    );
  }

  private closeConfirmationModal = () => {
    this.setState({
      isConfirmationModalOpen: false,
    });
  }

  private openConfirmationModal = () => {
    this.setState({
      isConfirmationModalOpen: true,
    });
  }
}
