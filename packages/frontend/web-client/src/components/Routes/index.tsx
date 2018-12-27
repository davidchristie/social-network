import { Authenticated, Unauthenticated } from "domain-model";
import { NotFoundPage } from "page-layouts";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { routes } from "./constants";

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
          <Route component={NotFoundPage} path="*" />
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
          <Route component={NotFoundPage} path="*" />
        </Switch>
      </Unauthenticated>
    </React.Fragment>
  );
};

export default Routes;
