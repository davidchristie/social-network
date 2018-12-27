import React from "react";
import Page from "../Page";

const LoginPage = () => {
  return <Page load={() => import("./Content")} />;
};

export default LoginPage;
