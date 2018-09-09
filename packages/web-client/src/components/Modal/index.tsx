import React from "react";

import Overlay from "../Overlay";
import "./index.css";

interface Props {
  onClose: () => void;
  open: boolean;
}

export default class Modal extends React.Component<Props> {
  public render () {
    if (!this.props.open) {
      return null;
    }
    return (
      <Overlay dark={true} onClick={this.props.onClose}>
        <div
          className="Modal"
          onClick={this.stopPropagation}
        >
          {this.props.children}
        </div>
      </Overlay>
    );
  }

  private stopPropagation = (event: React.MouseEvent) => {
    event.stopPropagation();
  }
}
