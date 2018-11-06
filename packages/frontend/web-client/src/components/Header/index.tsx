import { Button, Container, Topbar } from "design-system";
import React from "react";
import { Query, QueryResult } from "react-apollo";
import { Link } from "react-router-dom";

import AccountQuery, {
  AccountData,
  AccountVariables,
} from "../../queries/Account";
import AccountMenu from "../AccountMenu";
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
                <div>
                  {this.renderMenuItems(result)}
                  <a href="https://github.com/davidchristie/social-network">
                    <Button>
                      <img alt="GitHub" height={22} src={GitHub} />
                    </Button>
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
      return <AccountMenu />;
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
