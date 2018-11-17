import MaterialMenu from "@material-ui/core/Menu";
import React from "react";

interface Props {
  anchorElement?: any;
  children?: React.ReactNode;
  id?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  open: boolean;
  onClose?: () => void;
}

const Menu: React.ComponentType<Props> = ({
  anchorElement,
  children,
  id,
  onClick,
  onClose,
  open,
}) => {
  return (
    <MaterialMenu
      anchorEl={anchorElement}
      id={id}
      onClick={onClick}
      open={open}
      onClose={onClose}
    >
      {children}
    </MaterialMenu>
  );
};

export default Menu;
