import React from "react";
import { createStories } from "storybook-utilities";
import LoginPage from ".";

createStories("Page Layouts").add(
  "LoginPage",
  () => <LoginPage />
);
