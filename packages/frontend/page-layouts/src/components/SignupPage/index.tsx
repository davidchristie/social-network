import React from "react";
import Page from "../Page";

const SignupPage = () => {
  return <Page load={() => import("./Content")} />;
};

export default SignupPage;
