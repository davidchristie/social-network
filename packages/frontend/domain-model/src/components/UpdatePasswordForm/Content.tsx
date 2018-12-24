import { Alert, Button, Input, Section } from "design-system";
import React from "react";
import { MutationFn } from "react-apollo";
import {
  UpdatePassword,
  UpdatePasswordVariables,
} from "../../generated/types";

export interface Props {
  updatePassword: MutationFn<UpdatePassword, UpdatePasswordVariables>;
}

export interface State {
  currentPassword: string;
  errorMessage: string | null;
  newPassword: string;
}

export default class Content extends React.Component<Props, State> {
  public state: State = {
    currentPassword: "",
    errorMessage: null,
    newPassword: "",
  };
  public Mutation;
  public render () {
    return (
      <Section className="UpdatePasswordForm">
        <h2>Password</h2>
        <form onSubmit={this.handleFormSubmit}>
          {this.state.errorMessage && (
            <Alert>Current password is incorrect</Alert>
          )}
          <Input
            id="update-password-current"
            label="Current"
            name="current"
            onChange={this.handleCurrentPasswordChange}
            required={true}
            type="password"
            value={this.state.currentPassword}
          />
          <Input
            id="update-password-new"
            label="New"
            name="new"
            onChange={this.handleNewPasswordChange}
            required={true}
            type="password"
            value={this.state.newPassword}
          />
          <Button type="submit">Save</Button>
        </form>
      </Section>
    );
  }

  private handleCurrentPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      currentPassword: event.target.value,
    });
  }

  private handleFormSubmit = async (event: React.FormEvent) => {
    const { updatePassword } = this.props;
    event.preventDefault();
    try {
      await updatePassword({
        variables: {
          data: {
            currentPassword: this.state.currentPassword,
            newPassword: this.state.newPassword,
          },
        },
      });
      this.setState({
        currentPassword: "",
        errorMessage: null,
        newPassword: "",
      });
    } catch (error) {
      this.setState({
        errorMessage: error.message,
      });
    }
  }

  private handleNewPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newPassword: event.target.value,
    });
  }
}
