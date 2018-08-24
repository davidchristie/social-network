import React from "react";
import { Link, LinkProps } from "react-router-dom";

import Button from "../Button";
import "./index.css";

type Props = LinkProps;

export default class ButtonLink extends React.Component<Props> {
  public render () {
    const { children, to } = this.props;
    return (
      <Link className="ButtonLink" to={to}>
        <Button>
          {children}
        </Button>
      </Link>
    );
  }
}
