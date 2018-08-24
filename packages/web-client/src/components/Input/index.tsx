import React from "react";

import "./index.css";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> { }

export default class Input extends React.Component<Props> {
  public render () {
    const { className, ...attributes } = this.props;
    return (
      <input
        className={`Input${className ? " " + className : ""}`}
        {...attributes}
      />
    );
  }
}
