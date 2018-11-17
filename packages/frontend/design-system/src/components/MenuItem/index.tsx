import MaterialMenuItem from "@material-ui/core/MenuItem";
import React from "react";

interface Props {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const Menu: React.ComponentType<Props> = ({
  children,
  onClick,
}) => {
  return (
    <MaterialMenuItem onClick={onClick}>
      {children}
    </MaterialMenuItem>
  );
};

export default Menu;
