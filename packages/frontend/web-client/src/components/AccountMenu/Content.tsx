import { Avatar, Menu, MenuItem } from "design-system";
import React from "react";
import { Link } from "react-router-dom";
import { AUTHENTICATION_TOKEN } from "../../constants";

interface Account {
  profile: {
    avatar: {
      url: string;
    } | null;
    id: string;
  };
}

export interface Props {
  account: Account;
}

export interface State {
  anchorElement: HTMLElement | null;
}

export default class Content extends React.Component<Props, State> {
  public state = {
    anchorElement: null,
  };

  public render () {
    const { account } = this.props;
    return (
      <div>
        {this.renderAvatar(account)}
        {this.renderMenu(account)}
      </div>
    );
  }

  private renderAccountMenuItem = () => {
    return (
      <MenuItem
        component={Link}
        onClick={this.handleClose}
        to="/account"
      >
        Account
      </MenuItem>
    );
  }

  private renderLogoutMenuItem = () => {
    return (
      <MenuItem onClick={this.handleLogout}>
        Logout
      </MenuItem>
    );
  }

  private renderProfileMenuItem = (account: Account) => {
    return (
      <MenuItem
        component={Link}
        onClick={this.handleClose}
        to={`profile/${account.profile.id}`}
      >
        Profile
      </MenuItem>
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

  private handleLogout = () => {
    window.localStorage.removeItem(AUTHENTICATION_TOKEN);
    window.location.reload();
  }

  private renderAvatar = (account: Account) => {
    const { profile: { avatar } } = account;
    const image = avatar ? avatar.url : undefined;
    return (
      <Avatar
        image={image}
        onClick={this.handleClick}
        size="small"
      />
    );
  }

  private renderMenu = (account: Account) => {
    return (
      <Menu
        anchorElement={this.state.anchorElement}
        onClose={this.handleClose}
        open={Boolean(this.state.anchorElement)}
      >
        {this.renderProfileMenuItem(account)}
        {this.renderAccountMenuItem()}
        {this.renderLogoutMenuItem()}
      </Menu>
    );
  }
}
