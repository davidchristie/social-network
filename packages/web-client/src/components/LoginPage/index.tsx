import React from "react";

import Container from "../Container";
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
