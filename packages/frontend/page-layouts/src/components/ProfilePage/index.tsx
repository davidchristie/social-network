import React from "react";
import Page from "../Page";

const ProfilePage = () => {
  return <Page load={() => import("./Content")} />;
};

export default ProfilePage;
