import { Container } from "design-system";
import { SignupForm } from "domain-model";
import React from "react";

const Content: React.StatelessComponent = () => {
  return (
    <Container>
      <SignupForm />
    </Container>
  );
};

export default Content;
