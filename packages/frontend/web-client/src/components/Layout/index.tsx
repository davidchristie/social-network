import React from "react";

import Header from "../Header";
import "./index.css";

export default class Layout extends React.Component {
  public render () {
    return (
      <div className="Layout">
        <Header />
        <div className="page-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
