import React from "react";

import { ImageData } from "../../fragments/Image";
import AccountQuery from "../AccountQuery";
import Alert from "../Alert";
import Avatar from "../Avatar";
import ButtonLink from "../ButtonLink";
import Dropdown from "../Dropdown";
import LogoutButton from "../LogoutButton";
import "./index.css";

interface State {
  isDropdownOpen: boolean;
}

export default class AccountMenu extends React.Component<{}, State> {
  public state = {
    isDropdownOpen: false,
  };

  public render () {
    return (
      <AccountQuery>
        {({ data, error, loading }) => {
          if (loading || !data || !data.account) {
            return "Loading";
          }
          if (error) {
            return <Alert>{error.message}</Alert>;
          }
          const { account } = data;
          return (
            <div className="AccountMenu">
              {this.renderAvatar(account)}
              {this.renderDropdown(account)}
            </div>
          );
        }}
      </AccountQuery>
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

  private renderAvatar = (
    account: { profile: { avatar: ImageData | null } }
  ) => {
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

  private renderDropdown = (
    account: { profile: { id: string } }
  ) => {
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

  private renderProfileButton = (
    account: { profile: { id: string } }
  ) => {
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
