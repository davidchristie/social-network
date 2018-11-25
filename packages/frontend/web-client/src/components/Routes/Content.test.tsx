import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import { Redirect, StaticRouter } from "react-router";
import { create } from "react-test-renderer";
import {
  defaultAuthenticatedPath,
  defaultUnauthenticatedPath,
  routes
} from "./constants";
import Content from "./Content";

const authenticatedRoutes = routes.filter(route => {
  return !route.onlyUnauthenticated;
});
const unauthenticatedRoutes = routes.filter(route => {
  return !route.onlyAuthenticated;
});
const unknownPath = "unknown_path";

describe("Routes content", () => {
  describe("authenticated routes", () => {
    describe.each(authenticatedRoutes)("", route => {
      describe(route.path, () => {
        it("renders without crashing", () => {
          create(
            <StaticRouter context={{}} location={route.path}>
              <MockedProvider>
                <Content authenticated={true} />
              </MockedProvider>
            </StaticRouter>
          );
        });
      });
    });

    describe("unknown path", () => {
      it("redirects to default authenticated path", () => {
        const renderer = create(
          <StaticRouter context={{}} location={unknownPath}>
            <MockedProvider>
              <Content authenticated={true} />
            </MockedProvider>
          </StaticRouter>
        );
        const redirect = renderer.root
          .findByType(Redirect);
        expect(redirect.props.to).toBe(defaultAuthenticatedPath);
      });
    });
  });

  describe("unauthenticated routes", () => {
    describe.each(unauthenticatedRoutes)("", route => {
      describe(route.path, () => {
        it("renders without crashing", () => {
          create(
            <StaticRouter context={{}} location={route.path}>
              <MockedProvider>
                <Content authenticated={false} />
              </MockedProvider>
            </StaticRouter>
          );
        });
      });
    });

    describe("unknown path", () => {
      it("redirects to default unauthenticated path", () => {
        const renderer = create(
          <StaticRouter context={{}} location={unknownPath}>
            <MockedProvider>
              <Content authenticated={false} />
            </MockedProvider>
          </StaticRouter>
        );
        const redirect = renderer.root
          .findByType(Redirect);
        expect(redirect.props.to).toBe(defaultUnauthenticatedPath);
      });
    });
  });
});
