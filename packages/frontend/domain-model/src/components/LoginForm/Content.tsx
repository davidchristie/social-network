import { Alert, Button, Input, Section } from "design-system";
import React from "react";
import { MutationFn } from "react-apollo";
import { Link } from "react-router-dom";
import { Login, LoginVariables } from "../../generated/types";

export interface Props {
  login: MutationFn<Login, LoginVariables>;
}

export interface State {
  email: string;
  errorMessage: string | null;
  password: string;
}

export default class Content extends React.Component<Props, State> {
  public state: State = {
    email: "",
    errorMessage: null,
    password: "",
  };

  public render () {
    return (
      <Section className="LoginForm">
        <form onSubmit={this.handleFormSubmit}>
          <h2>Login</h2>
          Don't have an account? <Link to="/signup">Click here to sign up.</Link>
          <hr />
          {this.state.errorMessage && (
            <Alert>{this.state.errorMessage}</Alert>
          )}
          <Input
            autoFocus={true}
            id="login-email"
            label="Email Address"
            name="email"
            onChange={this.handleEmailChange}
            required={true}
            type="email"
            value={this.state.email}
          />
          <Input
            id="login-password"
            label="Password"
            name="password"
            onChange={this.handlePasswordChange}
            required={true}
            type="password"
            value={this.state.password}
          />
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
    const { login } = this.props;
    const { email, password } = this.state;
    try {
      await login({
        variables: {
          email,
          password,
        },
      });
    } catch (error) {
      this.setState({
        email: "",
        errorMessage: "Incorrect email or password.",
        password: "",
      });
    }
  }

  private handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      password: event.target.value,
    });
  }
}
