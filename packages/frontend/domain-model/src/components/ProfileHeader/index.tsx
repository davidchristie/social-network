import React from "react";
import Content from "./Content";
import Data from "./Data";

interface Props {
  profileId: string;
}

const ProfileHeader: React.StatelessComponent<Props> = props => {
  return <Data content={Content} {...props} />;
};

export default ProfileHeader;
