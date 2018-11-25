import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Page from "../Page";
import {
  defaultAuthenticatedPath,
  defaultUnauthenticatedPath,
  routes
} from "./constants";

export interface Props {
  authenticated: boolean;
}

const Content: React.StatelessComponent<Props> = ({ authenticated }) => {
  const defaultPath = authenticated
    ? defaultAuthenticatedPath
    : defaultUnauthenticatedPath;
  const filteredRoutes = routes
    .filter(route => {
      return authenticated
        ? !route.onlyUnauthenticated
        : !route.onlyAuthenticated;
    });
  return (
    <Switch>
      {filteredRoutes.map(route => {
        return (
          <Route
            exact={true}
            key={route.path}
            path={route.path}
            render={() => <Page load={route.load} />}
          />
        );
      })}
      <Route
        path="*"
        render={() => <Redirect to={defaultPath} />}
      />
    </Switch>
  );
};

export default Content;
