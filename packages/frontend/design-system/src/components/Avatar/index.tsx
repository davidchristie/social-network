import MaterialAvatar from "@material-ui/core/Avatar";
import React from "react";

import Icon from "../Icon";

interface Props {
  children?: React.ReactNode;
  image?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const Avatar: React.SFC<Props> = ({
  children,
  image,
  ...attributes
}) => {
  return (
    <MaterialAvatar src={image} {...attributes}>
      {children}
      {!children && !image && (
        <Icon>account_circle</Icon>
      )}
    </MaterialAvatar>
  );
};

export default Avatar;
