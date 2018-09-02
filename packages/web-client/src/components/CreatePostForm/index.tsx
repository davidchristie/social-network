import React from "react";
import { Mutation } from "react-apollo";

import CreatePostMutation, {
  CreatePostData,
  CreatePostVariables,
} from "../../mutations/CreatePost";
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
      <Mutation<CreatePostData, CreatePostVariables>
        mutation={CreatePostMutation}
        onCompleted={() => {
          this.setState({
            text: "",
          });
        }}
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
  }

  private textChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      text: event.target.value,
    });
  }
}
