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
import Input from "../Input";
import Section from "../Section";

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
          if (loading) {
            return "Loading";
          }
          if (error) {
            return <Alert>{error.message}</Alert>;
          }
          const { account } = data!;
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
                    <h2>Create Post</h2>
                    <div>
                      <Input
                        name="text"
                        onChange={this.textChanged}
                        required={true}
                        value={this.state.text}
                      />
                    </div>
                    <Button>Create</Button>
                  </form>
                </Section>
              )}
            </Mutation>
          );
        }}
      </Query>
    );
  }

  private textChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      text: event.target.value,
    });
  }
}
