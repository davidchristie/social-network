import React from "react";

import "./index.css";

interface Props {
  dark?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export default class Overlay extends React.Component<Props> {
  public render () {
    return (
      <div
        className={`Overlay${this.props.dark ? " dark" : ""}`}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </div>
    );
  }
}
