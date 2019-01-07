import CircularProgress from "@material-ui/core/CircularProgress";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import React from "react";

type Props = WithStyles<"loading"> & WithStyles<"progress">;

const Content: React.StatelessComponent<Props> = ({ classes }) => {
  return (
    <div className={classes.loading}>
      <CircularProgress className={classes.progress} />
    </div>
  );
};

export default Content;
