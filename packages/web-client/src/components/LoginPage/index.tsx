import { Container } from "design-system";
import React from "react";

import LoginForm from "../LoginForm";

export default class LoginPage extends React.Component {
  public render () {
    return (
      <Container className="LoginPage">
        <LoginForm />
      </Container>
    );
  }
}
