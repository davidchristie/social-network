import React from "react";
import { createStories } from "storybook-utilities";
import ProfileFollowers from ".";

createStories("Domain Model").add(
  "ProfileFollowers",
  () => <ProfileFollowers profileId="profile_id_1" />
);
