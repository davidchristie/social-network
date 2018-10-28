import { Section } from "design-system";
import React from "react";

import Container from "../Container";
import UpdateAccountForm from "../UpdateAccountForm";
import UpdatePasswordForm from "../UpdatePasswordForm";
import UpdateProfileForm from "../UpdateProfileForm";

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
