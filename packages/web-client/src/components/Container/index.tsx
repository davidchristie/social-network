import React from "react";

import "./index.css";

export default class Container extends React.Component {
  public render () {
    return (
      <div className="Container">
        {this.props.children}
      </div>
    );
  }
}
