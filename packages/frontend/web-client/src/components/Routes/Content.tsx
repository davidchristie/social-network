import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Page from "../Page";

interface Props {
  authenticated: boolean;
}

const Content: React.StatelessComponent<Props> = ({ authenticated }) => {
  return authenticated
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
};

export default Content;
