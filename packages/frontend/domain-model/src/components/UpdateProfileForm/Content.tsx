import { Button, Input, Section } from "design-system";
import React from "react";
import { MutationFn } from "react-apollo";
import { UpdateProfile, UpdateProfileVariables } from "../../generated/types";

export interface Props {
  account: {
    profile: {
      avatar: {
        url: string
      } | null;
      name;
    }
  };
  updateProfile: MutationFn<UpdateProfile, UpdateProfileVariables>;
}

export interface State {
  avatarUrl: string;
  name: string;
}

export default class UpdateProfileForm extends React.Component<Props, State> {
  public state: State = {
    avatarUrl: this.props.account.profile.avatar
      ? this.props.account.profile.avatar.url
      : "",
    name: this.props.account.profile.name,
  };

  public render () {
    return (
      <Section className="UpdateProfileForm">
        <form onSubmit={this.handleFormSubmit}>
          <h2>Profile</h2>
          <Input
            id="update-profile-name"
            label="Name"
            name="name"
            onChange={this.handleNameChange}
            required={true}
            value={this.state.name}
          />
          <Input
            id="update-profile-avatar-url"
            label="Avatar URL"
            name="avatar-url"
            onChange={this.handleAvatarUrlChange}
            type="url"
            value={this.state.avatarUrl}
          />
          <Button type="submit">Save</Button>
        </form>
      </Section>
    );
  }

  private handleAvatarUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      avatarUrl: event.target.value,
    });
  }

  private handleFormSubmit = (event: React.FormEvent) => {
    const { updateProfile } = this.props;
    event.preventDefault();
    updateProfile({
      variables: {
        data: {
          avatarUrl: this.state.avatarUrl.trim().length > 0
            ? this.state.avatarUrl
            : null,
          name: this.state.name,
        },
      },
    });
  }

  private handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      name: event.target.value,
    });
  }
}
