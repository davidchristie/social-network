import Paper from "@material-ui/core/Paper";
import withStyles, {
  WithStyles
} from "@material-ui/core/styles/withStyles";
import React from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
}

const styles = theme => ({
  section: {
    ...theme.mixins.gutters(),
    paddingBottom: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2,
  },
});

const Content: React.SFC<Props & WithStyles<"section">> = ({
  children,
  className,
  classes,
}) => {
  return (
    <Paper
      className={classes!.section + className ? " " + className : ""}
    >
      {children}
    </Paper>
  );
};

const Styled = withStyles(styles)(Content);

const Section: React.SFC<Props> = props => <Styled {...props} />;

export default Section;
