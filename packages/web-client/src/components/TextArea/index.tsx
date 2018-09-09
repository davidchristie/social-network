import React from "react";

import "./index.css";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { }

export default class TextArea extends React.Component<Props> {
  public render () {
    const { className, ...attributes } = this.props;
    return (
      <textarea
        className={`TextArea${className ? " " + className : ""}`}
        {...attributes}
      />
    );
  }
}
