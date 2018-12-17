import { Container, Section } from "design-system";
import { UpdateAccountForm, UpdatePasswordForm, UpdateProfileForm } from "domain-model";
import React from "react";

export default class AccountPage extends React.Component {
  public render () {
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
  }
}
