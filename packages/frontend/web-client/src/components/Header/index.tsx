import { Avatar, Container, Topbar } from "design-system";
import { AccountMenu, ProfileSearch } from "domain-model";
import React from "react";
import { Query, QueryResult } from "react-apollo";
import { Link } from "react-router-dom";
import AccountQuery, {
  AccountData,
  AccountVariables,
} from "../../queries/Account";
import ButtonLink from "../ButtonLink";
import GitHub from "./GitHub.png";
import "./index.css";

export default class Header extends React.Component {
  public render () {
    return (
      <Query<AccountData, AccountVariables>
        query={AccountQuery}
      >
        {result => {
          return (
            <Topbar className="Header">
              <Container>
                <Link
                  className="logo"
                  to="/"
                >
                  Social Network
                </Link>
                <div className="items">
                  {this.renderMenuItems(result)}
                  <a href="https://github.com/davidchristie/social-network">
                    <Avatar image={GitHub} />
                  </a>
                </div>
              </Container>
            </Topbar>
          );
        }}
      </Query>
    );
  }

  private renderMenuItems (
    { data, loading }: QueryResult<AccountData>
  ) {
    if (loading) {
      return null;
    }
    // Authenticated
    if (data && data.account) {
      return (
        <React.Fragment>
          <ProfileSearch />
          <AccountMenu />
        </React.Fragment>
      );
    }
    // Unauthenticated
    return (
      <React.Fragment>
        <ButtonLink to="/login">
          Login
        </ButtonLink>
        <ButtonLink to="/signup">
          Signup
        </ButtonLink>
      </React.Fragment>
    );
  }
}
