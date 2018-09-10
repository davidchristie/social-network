import React from "react";

import Container from "../Container";
import Section from "../Section";
import UpdateProfileForm from "../UpdateProfileForm";

export default class AccountPage extends React.Component {
  public render () {
    return (
      <Container>
        <Section>
          <h1>Account</h1>
          <UpdateProfileForm />
        </Section>
      </Container>
    );
  }
}
