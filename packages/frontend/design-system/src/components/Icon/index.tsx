import MaterialIcon from "@material-ui/core/Icon";
import React from "react";

interface Props {
  children: string;
  size?: Size;
  variant?: Variant;
}

type Size = "inherit" | "default" | "small" | "large";
type Variant = "action" | "disabled" | "error" | "inherit" | "primary" | "secondary";

const Icon: React.SFC<Props> = ({
  size = "small" as Size,
  variant = "inherit" as Variant,
  ...attributes
}) => {
  return (
    <MaterialIcon color={variant} fontSize={size} {...attributes} />
  );
};

export default Icon;
