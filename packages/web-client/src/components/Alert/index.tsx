import React from "react";

import "./index.css";

interface Props extends React.HTMLAttributes<HTMLElement> { }

export default class Alert extends React.Component<Props> {
  public render () {
    const { children, className, ...attributes } = this.props;
    return (
      <div
        className={`Alert${className ? " " + className : ""}`}
        {...attributes}
      >
        {children}
      </div>
    );
  }
}
