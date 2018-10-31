import { Container, Section } from "design-system";
import React from "react";

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
