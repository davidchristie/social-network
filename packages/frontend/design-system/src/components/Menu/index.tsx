import MaterialMenu from "@material-ui/core/Menu";
import { PopoverOrigin } from "@material-ui/core/Popover";
import React from "react";

interface Props {
  anchorElement?: any;
  anchorOrigin?: PopoverOrigin;
  children?: React.ReactNode;
  id?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  open: boolean;
  onClose?: () => void;
  transformOrigin?: PopoverOrigin;
}

const Menu: React.ComponentType<Props> = ({
  anchorElement,
  ...attributes
}) => {
  return <MaterialMenu anchorEl={anchorElement} {...attributes} />;
};

export default Menu;
