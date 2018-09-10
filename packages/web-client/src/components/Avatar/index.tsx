import React from "react";

import "./index.css";

interface Props {
  image: string;
  onClick?: (event: React.MouseEvent<HTMLImageElement>) => void;
  size: "small" | "large";
}

export default class Avatar extends React.Component<Props> {
  public render () {
    return (
      <img
        className={`Avatar ${this.props.size}`}
        onClick={this.props.onClick}
        src={this.props.image}
      />
    );
  }
}
