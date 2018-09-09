import React from "react";

import Button from "../Button";
import Overlay from "../Overlay";
import "./index.css";

interface Props {
  onClose: () => void;
  onConfirm: () => void;
  open: boolean;
}

export default class ConfirmationModal extends React.Component<Props> {
  public render () {
    if (!this.props.open) {
      return null;
    }
    return (
      <Overlay dark={true} onClick={this.props.onClose}>
        <div
          className="ConfirmationModal"
          onClick={this.stopPropagation}
        >
          {this.props.children}
          <hr />
          <Button onClick={this.handleConfirmClick}>
            Confirm
          </Button>
          <Button onClick={this.props.onClose}>
            Cancel
          </Button>
        </div>
      </Overlay>
    );
  }

  private handleConfirmClick = () => {
    this.props.onClose();
    this.props.onConfirm();
  }

  private stopPropagation = (event: React.MouseEvent) => {
    event.stopPropagation();
  }
}
