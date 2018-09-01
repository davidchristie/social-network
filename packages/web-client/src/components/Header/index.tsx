import React from "react";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";

import AccountQuery, {
  AccountData,
  AccountVariables,
} from "../../queries/Account";
import Alert from "../Alert";
import ButtonLink from "../ButtonLink";
import LogoutButton from "../LogoutButton";
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
            <header className="Header">
              <div>
                <Link to="/">Social Network</Link>
              </div>
              <div>
                {
                  account
                    ? (
                      <React.Fragment>
                        <ButtonLink
                          to={`profile/${account.profile.id}`}
                        >
                          Profile
                        </ButtonLink>
                        <ButtonLink to="/account">
                          Account
                        </ButtonLink>
                        <LogoutButton />
                      </React.Fragment>
                    )
                    : (
                      <React.Fragment>
                        <ButtonLink to="/signup">
                          Signup
                        </ButtonLink>
                        <ButtonLink to="/login">
                          Login
                        </ButtonLink>
                      </React.Fragment>
                    )
                }
              </div>
            </header>
          );
        }}
      </Query>
    );
  }
}
