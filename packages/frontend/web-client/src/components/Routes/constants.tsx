import {
  AccountPage,
  HomePage,
  LoginPage,
  ProfilePage,
  SignupPage,
} from "page-layouts";
import React from "react";

export interface RouteData {
  component: React.ComponentType;
  onlyAuthenticated?: boolean;
  onlyUnauthenticated?: boolean;
  path: string;
}

export const defaultAuthenticatedPath = "/";
export const defaultUnauthenticatedPath = "/login";

export const routes: RouteData[] = [
  {
    component: HomePage,
    onlyAuthenticated: true,
    path: "/",
  },
  {
    component: AccountPage,
    onlyAuthenticated: true,
    path: "/account",
  },
  {
    component: LoginPage,
    onlyUnauthenticated: true,
    path: "/login",
  },
  {
    component: ProfilePage,
    path: "/profile/:id",
  },
  {
    component: SignupPage,
    onlyUnauthenticated: true,
    path: "/signup",
  },
];
