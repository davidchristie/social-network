import { Avatar } from "design-system";
import React from "react";
import ButtonLink from "../ButtonLink";
import Dropdown from "../Dropdown";
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

export interface State {
  isDropdownOpen: boolean;
}

export default class Content extends React.Component<Props, State> {
  public state = {
    isDropdownOpen: false,
  };

  public render () {
    const { account } = this.props;
    return (
      <div className="AccountMenu">
        {this.renderAvatar(account)}
        {this.renderDropdown(account)}
      </div>
    );
  }

  private closeDropdown = () => {
    this.setState({
      isDropdownOpen: false,
    });
  }

  private renderAccountButton = () => {
    return (
      <ButtonLink
        onClick={this.closeDropdown}
        to="/account"
      >
        Account
      </ButtonLink>
    );
  }

  private renderAvatar = (account: Account) => {
    const { profile: { avatar } } = account;
    const image = avatar ? avatar.url : undefined;
    return (
      <Avatar
        image={image}
        onClick={this.openDropdown}
        size="small"
      />
    );
  }

  private renderDropdown = (account: Account) => {
    return (
      <Dropdown
        onClose={this.closeDropdown}
        open={this.state.isDropdownOpen}
      >
        {this.renderProfileButton(account)}
        {this.renderAccountButton()}
        <hr />
        <LogoutButton />
      </Dropdown>
    );
  }

  private renderProfileButton = (account: Account) => {
    return (
      <ButtonLink
        onClick={this.closeDropdown}
        to={`profile/${account.profile.id}`}
      >
        Profile
      </ButtonLink>
    );
  }

  private openDropdown = () => {
    this.setState({
      isDropdownOpen: true,
    });
  }
}
