import { Alert, Loading } from "design-system";
import React from "react";
import { Query } from "react-apollo";
import { Redirect, Route, Switch } from "react-router-dom";
import AccountQuery, {
  AccountData,
  AccountVariables,
} from "../../queries/Account";
import Page from "../Page";

export default class Routes extends React.Component {
  public render () {
    return (
      <Query<AccountData, AccountVariables>
        query={AccountQuery}
      >
        {({ data, error, loading }) => {
          if (loading) {
            return <Loading />;
          }
          if (error) {
            return <Alert>{error.message}</Alert>;
          }
          return data!.account
            ? (
              <Switch>
                <Route
                  exact={true}
                  path="/"
                  render={() => <Page load={() => import(/* webpackChunkName: "HomePage" */ "../HomePage")} />}
                />
                <Route
                  exact={true}
                  path="/account"
                  render={() => <Page load={() => import(/* webpackChunkName: "AccountPage" */ "../AccountPage")} />}
                />
                <Route
                  exact={true}
                  path="/profile/:id"
                  render={() => <Page load={() => import(/* webpackChunkName: "ProfilePage" */ "../ProfilePage")} />}
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
                  exact={true}
                  path="/login"
                  render={() => <Page load={() => import(/* webpackChunkName: "LoginPage" */ "../LoginPage")} />}
                />
                <Route
                  exact={true}
                  path="/signup"
                  render={() => <Page load={() => import(/* webpackChunkName: "SignupPage" */ "../SignupPage")} />}
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
