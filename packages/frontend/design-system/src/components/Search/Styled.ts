import { fade } from "@material-ui/core/styles/colorManipulator";
import withStyles, { StyleRulesCallback } from "@material-ui/core/styles/withStyles";
import withWidth from "@material-ui/core/withWidth/withWidth";

import Content from "./Content";

const styles: StyleRulesCallback = theme => ({
  input: {
    "&:focus": {
      outline: 0,
    },
    background: "none",
    border: 0,
    color: "inherit",
    display: "block",
    font: "inherit",
    margin: 0,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit}px ${theme.spacing.unit}px ${theme
      .spacing.unit * 9}px`,
    verticalAlign: "middle",
    whiteSpace: "inherit",
    width: "100%",
  },
  root: {
    "& $input": {
      "&:focus": {
        width: 250,
      },
      transition: theme.transitions.create("width"),
      width: 200,
    },
    "&:hover": {
      background: fade(theme.palette.common.white, 0.25),
    },
    background: fade(theme.palette.common.white, 0.15),
    borderRadius: 2,
    fontFamily: theme.typography.fontFamily,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit * 2,
    position: "relative",
  },
  search: {
    alignItems: "center",
    display: "flex",
    height: "100%",
    justifyContent: "center",
    pointerEvents: "none",
    position: "absolute",
    width: theme.spacing.unit * 9,
  },
  suggestion: {
    display: "block",
  },
  suggestionsContainerOpen: {
    left: 0,
    marginTop: theme.spacing.unit,
    position: "absolute",
    right: 0,
    zIndex: 1,
  },
  suggestionsList: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
  },
});

const Styled = withStyles(styles)(withWidth()(Content));

export default Styled;
