import AppBar from "@material-ui/core/AppBar";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";

const styles = {
  topbar: {
    flexGrow: 1,
  },
};

const Content: React.SFC<WithStyles<"topbar">> = ({ children, classes }) => {
  return (
    <div className={classes.topbar}>
      <AppBar position="static" color="default">
        <Toolbar>
          {children}
        </Toolbar>
      </AppBar>
    </div>
  );
};

const Styled = withStyles(styles)(Content);

const Topbar: React.SFC<{}> = () => <Styled />;

export default Topbar;
