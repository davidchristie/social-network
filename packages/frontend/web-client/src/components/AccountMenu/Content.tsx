import { Avatar, Menu } from "design-system";
import React from "react";
import ButtonLink from "../ButtonLink";
import LogoutButton from "../LogoutButton";

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

interface State {
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

  private renderAccountButton = () => {
    return (
      <ButtonLink
        onClick={this.handleClose}
        to="/account"
      >
        Account
      </ButtonLink>
    );
  }

  private renderProfileButton = (account: Account) => {
    return (
      <ButtonLink
        onClick={this.handleClose}
        to={`profile/${account.profile.id}`}
      >
        Profile
      </ButtonLink>
    );
  }

  private handleClick = event => {
    console.log(event.currentTarget);
    this.setState({
      anchorElement: event.currentTarget,
    });
  }

  private handleClose = () => {
    this.setState({
      anchorElement: null,
    });
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
        {this.renderProfileButton(account)}
        {this.renderAccountButton()}
        <hr />
        <LogoutButton />
      </Menu>
    );
  }
}
