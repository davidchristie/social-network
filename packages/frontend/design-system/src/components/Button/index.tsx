import MaterialButton from "@material-ui/core/Button";
import React from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  type?: string;
}

const Button: React.SFC<Props> = ({
  children,
  className,
  onClick,
  type,
}) => {
  return (
    <MaterialButton className={className} onClick={onClick} type={type}>
      {children}
    </MaterialButton>
  );
};

export default Button;
