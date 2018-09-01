import React from "react";
import { Query } from "react-apollo";
import { Redirect, Route, Switch } from "react-router-dom";

import AccountQuery, {
  AccountData,
  AccountVariables,
} from "../../queries/Account";
import AccountPage from "../AccountPage";
import Alert from "../Alert";
import HomePage from "../HomePage";
import LoginPage from "../LoginPage";
import SignupPage from "../SignupPage";

export default class Routes extends React.Component {
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
          return data!.account
            ? (
              <Switch>
                <Route
                  component={HomePage}
                  exact={true}
                  path="/"
                />
                <Route
                  component={AccountPage}
                  exact={true}
                  path="/account"
                />
                <Route
                  path="*"
                  render={() => <Redirect to="/" />}
                />
              </Switch>
            )
            : (
              <Switch>
                <Route
                  component={LoginPage}
                  exact={true}
                  path="/login"
                />
                <Route
                  component={SignupPage}
                  exact={true}
                  path="/signup"
                />
                <Route
                  path="*"
                  render={() => <Redirect to="/login" />}
                />
              </Switch>
            );
        }}
      </Query>
    );
  }
}
