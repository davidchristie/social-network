import React from "react";
import Content from "./Content";
import Data from "./Data";

interface Props {
  profileId: string;
}

const CreatePostForm: React.ComponentType<Props> = props => {
  return <Data content={Content} {...props} />;
};

export default CreatePostForm;
