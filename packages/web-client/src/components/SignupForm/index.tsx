import { Alert, Button, Input, Section } from "design-system";
import React from "react";
import { Mutation } from "react-apollo";
import { Link } from "react-router-dom";

import { AUTHENTICATION_TOKEN } from "../../constants";
import SignupMutation, {
  SignupData,
  SignupVariables,
} from "../../mutations/Signup";
import AccountQuery from "../../queries/Account";

interface State {
  email: string;
  error: string | null;
  name: string;
  password: string;
}

export default class SignupForm extends React.Component<{}, State> {
  public state: State = {
    email: "",
    error: null,
    name: "",
    password: "",
  };

  public render () {
    return (
      <Mutation<SignupData, SignupVariables>
        mutation={SignupMutation}
        onError={() => {
          this.setState({
            email: "",
            error: `An account with the email address "${this.state.email}" already exists.`,
          });
        }}
        refetchQueries={[
          {
            query: AccountQuery,
          },
        ]}
        update={({ }, { data }) => {
          if (data) {
            const token = data.signup.token;
            window.localStorage.setItem(AUTHENTICATION_TOKEN, token);
          }
        }}
        variables={{
          email: this.state.email,
          name: this.state.name,
          password: this.state.password,
        }}
      >
        {(signup) => (
          <Section className="SignupForm">
            <form
              onSubmit={(event: React.FormEvent) => {
                event.preventDefault();
                signup();
              }}
            >
              <h2>Signup</h2>
              Already have an account? <Link to="/login">Click here to log in.</Link>
              <hr />
              {
                this.state.error && (
                  <Alert>
                    {this.state.error}
                  </Alert>
                )
              }
              <div>
                <label htmlFor="signup-name">Name</label>
                <Input
                  id="signup-name"
                  name="name"
                  onChange={this.nameChanged}
                  required={true}
                  value={this.state.name}
                />
              </div>
              <div>
                <label htmlFor="signup-email">Email</label>
                <Input
                  id="signup-email"
                  name="email"
                  onChange={this.emailChanged}
                  required={true}
                  type="email"
                  value={this.state.email}
                />
              </div>
              <div>
                <label htmlFor="signup-password">Password</label>
                <Input
                  id="signup-password"
                  name="password"
                  onChange={this.passwordChanged}
                  required={true}
                  type="password"
                  value={this.state.password}
                />
              </div>
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

  private nameChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      name: event.target.value,
    });
  }

  private passwordChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      password: event.target.value,
    });
  }
}
