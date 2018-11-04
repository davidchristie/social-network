import React from "react";

import Overlay from "../Overlay";
import "./index.css";

interface Props {
  onClose?: () => void;
  open: boolean;
}

export default class Dropdown extends React.Component<Props> {
  public render () {
    if (!this.props.open) {
      return null;
    }
    return (
      <React.Fragment>
        <Overlay onClick={this.props.onClose} />
        <div className="Dropdown">
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}
