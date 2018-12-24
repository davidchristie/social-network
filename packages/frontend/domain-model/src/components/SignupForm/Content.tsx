import { Alert, Button, Input, Section } from "design-system";
import React from "react";
import { MutationFn } from "react-apollo";
import { Link } from "react-router-dom";
import { Signup, SignupVariables } from "../../generated/types";

export interface Props {
  signup: MutationFn<Signup, SignupVariables>;
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
      this.setState(previousState => ({
        ...previousState,
        email: "",
        errorMessage: error.message,
        password: "",
      }));
    }
  }

  private handleInputChange = (name: "email" | "name" | "password") => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      event.persist();
      this.setState(previousState => ({
        ...previousState,
        [name]: event.target.value,
      }));
    };
  }

  private renderEmailInput = () => {
    return (
      <Input
        id="signup-email"
        label="Email Address"
        name="email"
        onChange={this.handleInputChange("email")}
        required={true}
        type="email"
        value={this.state.email}
      />
    );
  }

  private renderNameInput = () => {
    return (
      <Input
        autoFocus={true}
        id="signup-name"
        label="Name"
        name="name"
        onChange={this.handleInputChange("name")}
        required={true}
        value={this.state.name}
      />
    );
  }

  private renderPasswordInput = () => {
    return (
      <Input
        id="signup-password"
        label="Password"
        name="password"
        onChange={this.handleInputChange("password")}
        required={true}
        type="password"
        value={this.state.password}
      />
    );
  }
}
