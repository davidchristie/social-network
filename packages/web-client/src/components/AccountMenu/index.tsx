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
              {this.renderAvatar(account.profile.avatar)}
              <Dropdown
                onClose={this.closeDropdown}
                open={this.state.isDropdownOpen}
              >
                <ButtonLink
                  onClick={this.closeDropdown}
                  to={`profile/${account.profile.id}`}
                >
                  Profile
                </ButtonLink>
                <ButtonLink
                  onClick={this.closeDropdown}
                  to="/account"
                >
                  Account
                </ButtonLink>
                <hr />
                <LogoutButton />
              </Dropdown>
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

  private renderAvatar = (avatar: ImageData | null) => {
    return (
      <Avatar
        image={avatar ? avatar.url : undefined}
        onClick={this.openDropdown}
        size="small"
      />
    );
  }

  private openDropdown = () => {
    this.setState({
      isDropdownOpen: true,
    });
  }
}
