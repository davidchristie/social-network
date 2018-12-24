import React from "react";
import ProfileFollowers from ".";
import createStories from "../../storybook/createStories";

createStories().add(
  "ProfileFollowers",
  () => <ProfileFollowers profileId="profile_id_1" />
);
