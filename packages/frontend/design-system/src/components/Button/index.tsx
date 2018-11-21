import MaterialButton from "@material-ui/core/Button";
import React from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  style?: "primary" | "secondary";
  type?: string;
  variant?: "contained" | "extendedFab" | "fab" | "flat" | "outlined" | "raised" | "text";
}

const Button: React.SFC<Props> = ({
  children,
  className,
  onClick,
  style,
  type,
  variant,
}) => {
  return (
    <MaterialButton
      className={className}
      color={style}
      onClick={onClick}
      type={type}
      variant={variant}
    >
      {children}
    </MaterialButton>
  );
};

export default Button;
