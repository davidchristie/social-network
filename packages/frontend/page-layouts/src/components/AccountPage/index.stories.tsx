import React from "react";
import { createStories } from "storybook-utilities";
import AccountPage from ".";

createStories("Page Layouts").add(
  "AccountPage",
  () => <AccountPage />
);
