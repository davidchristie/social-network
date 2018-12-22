import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import Menu from ".";
import Button from "../Button";
import MenuItem from "../MenuItem";
import Theme from "../Theme";

interface State {
  anchorElement: HTMLElement | null;
}

class MenuExample extends React.Component<{}, State> {
  public state = {
    anchorElement: null,
  };

  public render () {
    const { anchorElement } = this.state;
    return (
      <div>
        <Button
          aria-haspopup="true"
          aria-owns={anchorElement ? "menu-example" : undefined}
          onClick={this.handleClick}
        >
          Open Menu
        </Button>
        <Menu
          anchorElement={anchorElement}
          id="menu-example"
          open={Boolean(anchorElement)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>Item 1</MenuItem>
          <MenuItem onClick={this.handleClose}>Item 2</MenuItem>
          <MenuItem onClick={this.handleClose}>Item 3</MenuItem>
        </Menu>
      </div>
    );
  }

  private handleClick = event => {
    this.setState({
      anchorElement: event.currentTarget,
    });
  }

  private handleClose = () => {
    this.setState({
      anchorElement: null,
    });
  }
}

const stories = storiesOf("Design System", module);
stories.addDecorator(getStory => <Theme>{getStory()}</Theme>);
stories.addDecorator(withInfo({
  inline: true,
  propTablesExclude: [Theme],
}));
stories.add(
  "Menu",
  () => <MenuExample />
);
