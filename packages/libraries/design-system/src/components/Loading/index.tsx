import CircularProgress from "@material-ui/core/CircularProgress";
import { StyleRulesCallback, withStyles, WithStyles } from "@material-ui/core/styles";
import React from "react";

interface Props {
  className?: string;
}

const styles: StyleRulesCallback = theme => ({
  loading: {
    textAlign: "center",
  },
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

const Content: React.SFC<Props & WithStyles<"loading"> & WithStyles<"progress">> = ({ classes }) => {
  return (
    <div className={classes.loading}>
      <CircularProgress className={classes.progress} />
    </div>
  );
};

const Styled = withStyles(styles)(Content);

const Loading: React.SFC<Props> = props => <Styled {...props} />;

export default Loading;
