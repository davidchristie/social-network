import MaterialIcon from "@material-ui/core/Icon";
import "material-design-icons/iconfont/material-icons.css";
import React from "react";

interface Props {
  children: string;
  size?: "inherit" | "default" | "small" | "large";
  variant?: "action" | "disabled" | "error" | "inherit" | "primary" | "secondary";
}

const Icon: React.SFC<Props> = ({
  size = "small",
  variant = "inherit",
  ...attributes
}) => {
  return (
    <MaterialIcon color={variant} fontSize={size} {...attributes} />
  );
};

export default Icon;
