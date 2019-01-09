import withStyles, {
  StyleRulesCallback
} from "@material-ui/core/styles/withStyles";
import React from "react";
import Content from "./Content";

const styles: StyleRulesCallback = theme => ({
  loading: {
    textAlign: "center",
  },
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

const Style = withStyles(styles)(Content);

const Loading: React.StatelessComponent<{}> = props => <Style {...props} />;

export default Loading;
