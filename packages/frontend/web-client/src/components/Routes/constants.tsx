import React from "react";

export interface RouteData {
  load: () => Promise<{
    default: React.ComponentType
  }>;
  onlyAuthenticated?: boolean;
  onlyUnauthenticated?: boolean;
  path: string;
}

export const defaultAuthenticatedPath = "/";
export const defaultUnauthenticatedPath = "/login";

export const routes: RouteData[] = [
  {
    load: () => import(/* webpackChunkName: "HomePage" */ "../HomePage"),
    onlyAuthenticated: true,
    path: "/",
  },
  {
    load: () => import(/* webpackChunkName: "AccountPage" */ "../AccountPage"),
    onlyAuthenticated: true,
    path: "/account",
  },
  {
    load: () => import(/* webpackChunkName: "LoginPage" */ "../LoginPage"),
    onlyUnauthenticated: true,
    path: "/login",
  },
  {
    load: () => import(/* webpackChunkName: "ProfilePage" */ "../ProfilePage"),
    path: "/profile/:id",
  },
  {
    load: () => import(/* webpackChunkName: "SignupPage" */ "../SignupPage"),
    onlyUnauthenticated: true,
    path: "/signup",
  },
];
