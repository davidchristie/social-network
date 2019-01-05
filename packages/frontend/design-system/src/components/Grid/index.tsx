import MaterialGrid, { GridProps } from "@material-ui/core/Grid";
import React from "react";

const Grid: React.StatelessComponent<GridProps> = props => {
  return (
    <MaterialGrid {...props} />
  );
};

export default Grid;
