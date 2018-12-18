import { Button, Icon, Menu } from "design-system";
import React from "react";
import DeletePostMenuItem from "../DeletePostMenuItem";

interface Props {
  postId: string;
}

interface State {
  anchorElement: EventTarget | null;
}

export default class PostMenu extends React.Component<Props, State> {
  public state = {
    anchorElement: null,
  };

  public render () {
    return (
      <div className="PostMenu">
        <Button onClick={this.handleButtonClick}>
          <Icon>more_horiz</Icon>
        </Button>
        <Menu
          anchorElement={this.state.anchorElement}
          anchorOrigin={{
            horizontal: "right",
            vertical: "top",
          }}
          onClose={this.closeMenu}
          open={Boolean(this.state.anchorElement)}
          transformOrigin={{
            horizontal: "right",
            vertical: "top",
          }}
        >
          <DeletePostMenuItem
            onCancel={this.closeMenu}
            onConfirm={this.closeMenu}
            postId={this.props.postId}
          />
        </Menu>
      </div>
    );
  }

  private closeMenu = () => {
    this.setState({
      anchorElement: null,
    });
  }

  private handleButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({
      anchorElement: event.target,
    });
  }
}
