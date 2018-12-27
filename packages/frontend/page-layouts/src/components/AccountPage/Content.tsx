import { Container, Section } from "design-system";
import { UpdateAccountForm, UpdatePasswordForm, UpdateProfileForm } from "domain-model";
import React from "react";

const Content: React.StatelessComponent = () => {
  return (
    <Container>
      <Section>
        <h1>Account</h1>
        <UpdateProfileForm />
        <UpdateAccountForm />
        <UpdatePasswordForm />
      </Section>
    </Container>
  );
};

export default Content;
