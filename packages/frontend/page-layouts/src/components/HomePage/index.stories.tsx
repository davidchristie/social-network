import React from "react";
import { createStories } from "storybook-utilities";
import HomePage from ".";

createStories("Page Layouts").add(
  "HomePage",
  () => <HomePage />
);
