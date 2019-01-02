import React from "react";
import { createStories } from "storybook-utilities";
import SignupPage from ".";

createStories("Page Layouts").add(
  "SignupPage",
  () => <SignupPage />
);
