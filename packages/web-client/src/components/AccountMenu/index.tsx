import React from "react";

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
          if (loading) {
            return "Loading";
          }
          if (error) {
            return <Alert>{error.message}</Alert>;
          }
          const { account } = data!;
          return (
            <div className="AccountMenu">
              <Avatar
                image={account.profile.avatar ? account.profile.avatar.url : undefined}
                onClick={this.openDropdown}
                size="small"
              />
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

  private openDropdown = () => {
    this.setState({
      isDropdownOpen: true,
    });
  }
}
