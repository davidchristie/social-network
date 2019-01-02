import React from "react";
import { createStories } from "storybook-utilities";
import AccountMenu from ".";

createStories("Domain Model").add(
  "AccountMenu",
  () => <AccountMenu />
);
