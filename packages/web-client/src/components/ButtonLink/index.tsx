import { Button } from "design-system";
import React from "react";
import { Link, LinkProps } from "react-router-dom";

import "./index.css";

type Props = LinkProps;

export default class ButtonLink extends React.Component<Props> {
  public render() {
    const { children, className, ...attributes } = this.props;
    return (
      <Link
        className={`ButtonLink${className ? " " + className : ""}`}
        {...attributes}
      >
        <Button>
          {children}
        </Button>
      </Link>
    );
  }
}
