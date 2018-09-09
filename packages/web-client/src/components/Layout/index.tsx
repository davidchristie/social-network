import React from "react";

import Container from "../Container";
import Header from "../Header";
import "./index.css";

export default class Layout extends React.Component {
  public render () {
    return (
      <div className="Layout">
        <Header />
        <div className="page-content">
          <Container>
            {this.props.children}
          </Container>
        </div>
      </div>
    );
  }
}
