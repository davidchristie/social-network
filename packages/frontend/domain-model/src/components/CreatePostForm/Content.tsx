import { Button, Section, TextArea } from "design-system";
import React from "react";
import { MutationFn } from "react-apollo";
import { CreatePostData, CreatePostVariables } from "../../mutations/CreatePost";

export interface Props {
  createPost: MutationFn<CreatePostData, CreatePostVariables>;
}

export interface State {
  text: string;
}

export default class Content extends React.Component<Props, State> {
  public state: State = {
    text: "",
  };

  public render () {
    return (
      <Section>
        <form onSubmit={this.handleFormSubmitted}>
          <div>
            <TextArea
              name="text"
              onChange={this.handleTextChanged}
              required={true}
              value={this.state.text}
            />
          </div>
          <Button type="submit">Post</Button>
        </form>
      </Section>
    );
  }

  private handleFormSubmitted = async (event: React.FormEvent) => {
    event.preventDefault();
    await this.props.createPost({
      variables: {
        text: this.state.text,
      },
    });
    this.setState({
      text: "",
    });
  }

  private handleTextChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({
      text: event.target.value,
    });
  }
}
