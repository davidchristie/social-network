import React from "react";

import "./index.css";

export default class Theme extends React.Component {
  public render () {
    return (
      <div className="Theme">
        {this.props.children}
      </div>
    );
  }
}
