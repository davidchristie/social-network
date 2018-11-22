import React from "react";
import Content from "./Content";
import Data from "./Data";

interface Props {
  profileId: string;
}

const ProfilePosts: React.StatelessComponent<Props> = ({ profileId }) => (
  <Data content={Content} profileId={profileId} />
);

export default ProfilePosts;
