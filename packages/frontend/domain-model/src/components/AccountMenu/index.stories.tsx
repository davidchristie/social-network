import React from "react";
import AccountMenu from ".";
import createStories from "../../storybook/createStories";

createStories().add(
  "AccountMenu",
  () => <AccountMenu />
);
