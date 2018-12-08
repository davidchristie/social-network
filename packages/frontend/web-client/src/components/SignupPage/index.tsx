import { Container } from "design-system";
import { SignupForm } from "domain-model";
import React from "react";

export default class SignupPage extends React.Component {
  public render () {
    return (
      <Container>
        <SignupForm />
      </Container>
    );
  }
}
