import MaterialMenuItem from "@material-ui/core/MenuItem";
import React from "react";

interface Props {
  children?: React.ReactNode;
  component?: any;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  [name: string]: any;
}

const MenuItem: React.ComponentType<Props> = ({
  ...attributes
}) => {
  return <MaterialMenuItem {...attributes} />;
};

export default MenuItem;
