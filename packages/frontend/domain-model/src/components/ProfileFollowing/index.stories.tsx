import React from "react";
import { createStories } from "storybook-utilities";
import ProfileFollowing from ".";

createStories("Domain Model").add(
  "ProfileFollowing",
  () => <ProfileFollowing profileId="profile_id_1" />
);
