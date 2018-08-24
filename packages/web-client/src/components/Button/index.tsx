import React from "react";

import "./index.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

export default class Button extends React.Component<Props> {
  public render () {
    const { children, className, ...attributes } = this.props;
    return (
      <button
        className={`Button${className ? " " + className : ""}`}
        {...attributes}
      >
        {children}
      </button>
    );
  }
}
