import React from "react";
import ProfileFollowing from ".";
import createStories from "../../storybook/createStories";

createStories().add(
  "ProfileFollowing",
  () => <ProfileFollowing profileId="profile_id_1" />
);
