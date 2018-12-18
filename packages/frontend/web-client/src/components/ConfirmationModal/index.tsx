import { Button, Modal } from "design-system";
import React from "react";

interface Props {
  onCancel: () => void;
  onConfirm: () => void;
  open: boolean;
}

export default class ConfirmationModal extends React.Component<Props> {
  public render () {
    return (
      <Modal
        open={this.props.open}
        onClose={this.handleCancel}
      >
        {this.props.children}
        <hr />
        <Button onClick={this.handleConfirm}>
          Confirm
        </Button>
        <Button onClick={this.handleCancel}>
          Cancel
        </Button>
      </Modal>
    );
  }

  private handleCancel = () => {
    this.props.onCancel();
  }

  private handleConfirm = () => {
    this.props.onConfirm();
  }
}
