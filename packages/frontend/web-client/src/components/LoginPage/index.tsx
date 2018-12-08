import { Container } from "design-system";
import { LoginForm } from "domain-model";
import React from "react";

export default class LoginPage extends React.Component {
  public render () {
    return (
      <Container className="LoginPage">
        <LoginForm />
      </Container>
    );
  }
}
