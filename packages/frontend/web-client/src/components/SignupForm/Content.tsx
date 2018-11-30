import { Alert, Button, Input, Section } from "design-system";
import React from "react";
import { MutationFn } from "react-apollo";
import { Link } from "react-router-dom";
import { SignupData, SignupVariables } from "../../mutations/Signup";

export interface Props {
  signup: MutationFn<SignupData, SignupVariables>;
}

export interface State {
  email: string;
  errorMessage: string | null;
  name: string;
  password: string;
}

export default class Content extends React.Component<Props, State> {
  public state: State = {
    email: "",
    errorMessage: null,
    name: "",
    password: "",
  };

  public render () {
    return (
      <Section className="SignupForm">
        <form onSubmit={this.handleFormSubmit}>
          <h2>Signup</h2>
          Already have an account? <Link to="/login">Click here to log in.</Link>
          <hr />
          {this.state.errorMessage && <Alert>{this.state.errorMessage}</Alert>}
          {this.renderNameInput()}
          {this.renderEmailInput()}
          {this.renderPasswordInput()}
          <Button type="submit">Submit</Button>
        </form>
      </Section>
    );
  }

  private handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      email: event.target.value,
    });
  }

  private handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await this.props.signup({
        variables: {
          email: this.state.email,
          name: this.state.name,
          password: this.state.password,
        },
      });
    } catch (error) {
      this.setState({
        email: "",
        errorMessage: error.message,
      });
    }
  }

  private handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      name: event.target.value,
    });
  }

  private handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      password: event.target.value,
    });
  }

  private renderEmailInput () {
    return (
      <Input
        id="signup-email"
        label="Email Address"
        name="email"
        onChange={this.handleEmailChange}
        required={true}
        type="email"
        value={this.state.email}
      />
    );
  }

  private renderNameInput () {
    return (
      <Input
        autoFocus={true}
        id="signup-name"
        label="Name"
        name="name"
        onChange={this.handleNameChange}
        required={true}
        value={this.state.name}
      />
    );
  }

  private renderPasswordInput () {
    return (
      <Input
        id="signup-password"
        label="Password"
        name="password"
        onChange={this.handlePasswordChange}
        required={true}
        type="password"
        value={this.state.password}
      />
    );
  }
}
