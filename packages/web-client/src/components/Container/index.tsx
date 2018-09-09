import React from "react";

import "./index.css";

type Props = React.HTMLAttributes<HTMLDivElement>;

export default class Container extends React.Component<Props> {
  public render () {
    const { children, className, ...attributes } = this.props;
    return (
      <div
        className={`Container${className ? " " + className : ""}`}
        {...attributes}
      >
        {children}
      </div>
    );
  }
}
