import AppBar from "@material-ui/core/AppBar";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import Toolbar from "@material-ui/core/Toolbar";
import classNames from "classnames";
import React from "react";

type Props = {
  className?: string;
} & WithStyles<"topbar">;

const Content: React.StatelessComponent<Props> = ({
  children,
  classes,
  className,
}) => {
  return (
    <div className={classNames(classes.topbar, className)}>
      <AppBar color="default" position="fixed">
        <Toolbar>
          {children}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Content;
