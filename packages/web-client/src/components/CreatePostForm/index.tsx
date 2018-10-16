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
import Alert from "../Alert";
import Button from "../Button";
import Section from "../Section";
import TextArea from "../TextArea";

interface State {
  text: string;
}

export default class CreatePostForm extends React.Component<{}, State> {
  public state: State = {
    text: "",
  };

  public render () {
    return (
      <Query<AccountData, AccountVariables>
        query={AccountQuery}
      >
        {({ data, error, loading }) => {
          if (loading || !data || !data.account) {
            return "Loading";
          }
          if (error) {
            return <Alert>{error.message}</Alert>;
          }
          const { account } = data;
          return (
            <Mutation<CreatePostData, CreatePostVariables>
              mutation={CreatePostMutation}
              onCompleted={() => {
                this.setState({
                  text: "",
                });
              }}
              refetchQueries={[
                {
                  query: ProfileQuery,
                  variables: {
                    id: account.profile.id,
                  },
                },
              ]}
              variables={{
                text: this.state.text,
              }}
            >
              {(createPost) => (
                <Section>
                  <form
                    onSubmit={(event: React.FormEvent) => {
                      event.preventDefault();
                      createPost();
                    }}
                  >
                    <div>
                      <TextArea
                        name="text"
                        onChange={this.textChanged}
                        required={true}
                        value={this.state.text}
                      />
                    </div>
                    <Button>Post</Button>
                  </form>
                </Section>
              )}
            </Mutation>
          );
        }}
      </Query>
    );
  }

  private textChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({
      text: event.target.value,
    });
  }
}
