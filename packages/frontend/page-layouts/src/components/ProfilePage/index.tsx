import React from "react";
import { withRouter } from "react-router-dom";
import Page from "../Page";

const ProfilePage = () => {
  return <Page load={() => import("./Content")} />;
};

export default withRouter(ProfilePage);
