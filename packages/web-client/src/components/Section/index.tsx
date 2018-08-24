import React from "react";

import "./index.css";

interface Props extends React.HTMLAttributes<HTMLElement> { }

export default class Section extends React.Component<Props> {
  public render () {
    const { children, className, ...attributes } = this.props;
    return (
      <section
        className={`Section${className ? " " + className : ""}`}
        {...attributes}
      >
        {children}
      </section>
    );
  }
}
