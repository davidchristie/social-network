import React from "react";
import { withRouter } from "react-router-dom";
import Page from "../Page";

const ProfilePage = (props) => {
  console.log(props.match);
  return <Page load={() => import("./Content")} />;
};

export default withRouter(ProfilePage);
