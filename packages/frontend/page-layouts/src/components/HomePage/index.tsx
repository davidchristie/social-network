import React from "react";
import Page from "../Page";

const HomePage = () => {
  return <Page load={() => import("./Content")} />;
};

export default HomePage;
