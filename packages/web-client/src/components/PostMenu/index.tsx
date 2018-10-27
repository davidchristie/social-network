import { Button } from "design-system";
import React from "react";

import DeletePostButton from "../DeletePostButton";
import Dropdown from "../Dropdown";
import "./index.css";

interface Props {
  postId: string;
}

interface State {
  isDropdownOpen: boolean;
}

export default class PostMenu extends React.Component<Props, State> {
  public state = {
    isDropdownOpen: false,
  };

  public render() {
    return (
      <div className="PostMenu">
        <Button onClick={this.openDropdown}>
          Actions
        </Button>
        <Dropdown
          onClose={this.closeDropdown}
          open={this.state.isDropdownOpen}
        >
          <DeletePostButton postId={this.props.postId} />
        </Dropdown>
      </div>
    );
  }

  private closeDropdown = () => {
    this.setState({
      isDropdownOpen: false,
    });
  }

  private openDropdown = () => {
    this.setState({
      isDropdownOpen: true,
    });
  }
}
