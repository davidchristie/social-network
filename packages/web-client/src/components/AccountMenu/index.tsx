import React from "react";
import { Query } from "react-apollo";

import AccountQuery, {
  AccountData,
  AccountVariables
} from "../../queries/Account";
import Alert from "../Alert";
import ButtonLink from "../ButtonLink";
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
      <Query<AccountData, AccountVariables>
        query={AccountQuery}
      >
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
              <div className="avatar" onClick={this.openDropdown} />
              <div
                className="overlay"
                onClick={this.closeDropdown}
                style={{
                  display: this.state.isDropdownOpen
                    ? "inherit"
                    : "none",
                }}
              />
              <div
                className="dropdown"
                style={{
                  display: this.state.isDropdownOpen
                    ? "inherit"
                    : "none",
                }}
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
              </div>
            </div>
          );
        }}
      </Query>
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



