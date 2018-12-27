import React from "react";
import Page from "../Page";

const AccountPage = () => {
  return <Page load={() => import("./Content")} />;
};

export default AccountPage;
