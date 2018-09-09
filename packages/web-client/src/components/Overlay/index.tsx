import React from "react";

import "./index.css";

interface Props {
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export default class Overlay extends React.Component<Props> {
  public render () {
    return (
      <div
        className="Overlay"
        onClick={this.props.onClick}
      />
    );
  }
}
