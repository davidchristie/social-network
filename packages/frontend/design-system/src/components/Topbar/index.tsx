import withStyles from "@material-ui/core/styles/withStyles";
import React from "react";
import Content from "./Content";

interface Props {
  className?: string;
}

const styles = {
  topbar: {
    flexGrow: 1,
  },
};

const Style = withStyles(styles)(Content);

const Topbar: React.StatelessComponent<Props> = props => <Style {...props} />;

export default Topbar;
