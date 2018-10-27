import { Button } from "design-system";
import React from "react";

import Modal from "../Modal";

interface Props {
  onClose: () => void;
  onConfirm: () => void;
  open: boolean;
}

export default class ConfirmationModal extends React.Component<Props> {
  public render () {
    return (
      <Modal
        open={this.props.open}
        onClose={this.props.onClose}
      >
        {this.props.children}
        <hr />
        <Button onClick={this.handleConfirmClick}>
          Confirm
          </Button>
        <Button onClick={this.props.onClose}>
          Cancel
        </Button>
      </Modal>
    );
  }

  private handleConfirmClick = () => {
    this.props.onClose();
    this.props.onConfirm();
  }
}
