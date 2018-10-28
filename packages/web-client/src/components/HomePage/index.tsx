import { Section } from "design-system";
import React from "react";

import Container from "../Container";

export default class HomePage extends React.Component {
  public render () {
    return (
      <Container className="HomePage">
        <Section>
          <h1>Home</h1>
        </Section>
      </Container>
    );
  }
}
