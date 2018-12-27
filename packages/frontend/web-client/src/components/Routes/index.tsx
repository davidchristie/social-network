import { Authenticated, Unauthenticated } from "domain-model";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import {
  defaultAuthenticatedPath,
  defaultUnauthenticatedPath,
  routes
} from "./constants";

const Routes: React.StatelessComponent = () => {
  const authenticatedRoutes = routes.filter(route => !route.onlyUnauthenticated);
  const unauthenticatedRoutes = routes.filter(route => !route.onlyAuthenticated);
  return (
    <React.Fragment>
      <Authenticated>
        <Switch>
          {authenticatedRoutes.map(route => {
            return (
              <Route
                component={route.component}
                exact={true}
                key={route.path}
                path={route.path}
              />
            );
          })}
          <Route
            path="*"
            render={() => <Redirect to={defaultAuthenticatedPath} />}
          />
        </Switch>
      </Authenticated>
      <Unauthenticated>
        <Switch>
          {unauthenticatedRoutes.map(route => {
            return (
              <Route
                component={route.component}
                exact={true}
                key={route.path}
                path={route.path}
              />
            );
          })}
          <Route
            path="*"
            render={() => <Redirect to={defaultUnauthenticatedPath} />}
          />
        </Switch>
      </Unauthenticated>
    </React.Fragment>
  );
};

export default Routes;
