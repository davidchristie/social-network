import { Container } from "design-system";
import { LoginForm } from "domain-model";
import React from "react";

const LoginPage: React.StatelessComponent = () => {
  return (
    <Container className="LoginPage">
      <LoginForm />
    </Container>
  );
};

export default LoginPage;
