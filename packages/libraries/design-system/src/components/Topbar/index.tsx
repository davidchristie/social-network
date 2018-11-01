import AppBar from "@material-ui/core/AppBar";
import withStyles, {
  WithStyles
} from "@material-ui/core/styles/withStyles";
import Toolbar from "@material-ui/core/Toolbar";
import classNames from "classnames";
import React from "react";

interface Props {
  className?: string;
}

const styles = {
  topbar: {
    flexGrow: 1,
  },
};

const Content: React.SFC<Props & WithStyles<"topbar">> = ({ children, classes, className }) => {
  return (
    <div className={classNames(classes.topbar, className)}>
      <AppBar position="static" color="default">
        <Toolbar>
          {children}
        </Toolbar>
      </AppBar>
    </div>
  );
};

const Styled = withStyles(styles)(Content);

const Topbar: React.SFC<Props> = props => <Styled {...props} />;

export default Topbar;
