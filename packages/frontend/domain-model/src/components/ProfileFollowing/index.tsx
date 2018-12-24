import React from "react";
import Content from "./Content";
import Data from "./Data";
import "./index.css";

interface Props {
  profileId: string;
}

const ProfileFollowing: React.ComponentType<Props> = props => {
  return <Data content={Content} {...props} />;
};

export default ProfileFollowing;
