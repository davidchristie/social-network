import Dialog from "@material-ui/core/Dialog";
import { Section } from "design-system";
import React from "react";

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
        <Dialog
          className="Modal"
          onClose={this.props.onClose}
          open={true}
        >
          <Section>
          {this.props.children}
          </Section>
        </Dialog>
    );
  }
}
