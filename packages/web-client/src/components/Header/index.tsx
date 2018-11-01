import { Alert, Container, Topbar } from "design-system";
import React from "react";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";

import AccountQuery, {
  AccountData,
  AccountVariables,
} from "../../queries/Account";
import AccountMenu from "../AccountMenu";
import ButtonLink from "../ButtonLink";
import "./index.css";

export default class Header extends React.Component {
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
            <Topbar className="Header">
              <Container>
                <Link
                  className="logo"
                  to="/"
                >
                  Social Network
                </Link>
                <div>
                  {
                    account
                      ? <AccountMenu />
                      : (
                        <React.Fragment>
                          <ButtonLink to="/login">
                            Login
                          </ButtonLink>
                          <ButtonLink to="/signup">
                            Signup
                          </ButtonLink>
                        </React.Fragment>
                      )
                  }
                </div>
              </Container>
            </Topbar>
          );
        }}
      </Query>
    );
  }
}
