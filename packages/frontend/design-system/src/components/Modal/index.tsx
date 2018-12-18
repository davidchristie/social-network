import Dialog from "@material-ui/core/Dialog";
import React from "react";
import Section from "../Section";

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
