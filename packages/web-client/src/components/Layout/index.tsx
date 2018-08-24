import React from "react";

import Header from "../Header";
import "./index.css";

export default class Layout extends React.Component {
  public render () {
    return (
      <div className="Layout">
        <Header />
        {this.props.children}
      </div>
    );
  }
}
