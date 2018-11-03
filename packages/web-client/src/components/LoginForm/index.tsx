import { Alert, Button, Input, Section } from "design-system";
import React from "react";
import { Mutation } from "react-apollo";
import { Link } from "react-router-dom";

import { AUTHENTICATION_TOKEN } from "../../constants";
import LoginMutation, {
  LoginData,
  LoginVariables,
} from "../../mutations/Login";
import AccountQuery from "../../queries/Account";

export interface State {
  email: string;
  error: string | null;
  password: string;
}

export default class LoginForm extends React.Component<{}, State> {
  public state: State = {
    email: "",
    error: null,
    password: "",
  };

  public render () {
    const { email, password } = this.state;
    return (
      <Mutation<LoginData, LoginVariables>
        mutation={LoginMutation}
        onError={() => {
          this.setState({
            email: "",
            error: "Incorrect email or password.",
            password: "",
          });
        }}
        refetchQueries={[
          {
            query: AccountQuery,
          },
        ]}
        update={({ }, { data }) => {
          if (data) {
            const { token } = data.login;
            window.localStorage.setItem(AUTHENTICATION_TOKEN, token);
          }
        }}
        variables={{
          email,
          password,
        }}
      >
        {(login) => (
          <Section className="LoginForm">
            <form
              onSubmit={async (event: React.FormEvent) => {
                event.preventDefault();
                login();
              }}
            >
              <h2>Login</h2>
              Don't have an account? <Link to="/signup">Click here to sign up.</Link>
              <hr />
              {
                this.state.error && (
                  <Alert>{this.state.error}</Alert>
                )
              }
              <Input
                autoFocus={true}
                id="login-email"
                label="Email Address"
                name="email"
                onChange={this.emailChanged}
                required={true}
                type="email"
                value={this.state.email}
              />
              <Input
                id="login-password"
                label="Password"
                name="password"
                onChange={this.passwordChanged}
                required={true}
                type="password"
                value={this.state.password}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Section>
        )}
      </Mutation>
    );
  }

  private emailChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      email: event.target.value,
    });
  }

  private passwordChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      password: event.target.value,
    });
  }
}
