import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";
import withStyles, {
  StyleRulesCallback,
  WithStyles
} from "@material-ui/core/styles/withStyles";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth/withWidth";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";
import React from "react";
import Autosuggest from "react-autosuggest";

import Icon from "../Icon";

interface Suggestion {
  id: string;
  name: string;
}

interface Props {
  fetchSuggestions: (value: string) => Promise<Suggestion[]>;
  onSelect: (selected: Selection) => void;
}

type ContentProps = Props
  & WithStyles<"input">
  & WithStyles<"root">
  & WithStyles<"search">
  & WithStyles<"suggestion">
  & WithStyles<"suggestionsContainerOpen">
  & WithStyles<"suggestionsList">
  & { width: Breakpoint; };

function renderSuggestion (suggestion: Suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.name, query);
  const parts = parse(suggestion.name, matches);
  return (
    <MenuItem component="div" selected={isHighlighted}>
      {parts.map((part, index) => {
        return part.highlight
          ? (
            <span key={String(index)} style={{ fontWeight: 300 }}>
              {part.text}
            </span>
          )
          : (
            <strong key={String(index)} style={{ fontWeight: 500 }}>
              {part.text}
            </strong>
          );
      })}
    </MenuItem>
  );
}

function renderSuggestionsContainer (options) {
  const { containerProps, children } = options;
  return (
    <Paper {...containerProps} square={true}>
      {children}
    </Paper>
  );
}

function getSuggestionValue (suggestion) {
  return suggestion.name;
}

interface ContentState {
  suggestions: Suggestion[];
  value: string;
}

class Content extends React.Component<ContentProps, ContentState> {
  public state = {
    suggestions: [],
    value: "",
  };

  public render () {
    const { classes, width } = this.props;
    return (
      <div className={classes.root} style={{ display: isWidthUp("sm", width) ? "block" : "none" }}>
        <div className={classes.search}>
          <Icon>search</Icon>
        </div>
        {this.renderAutosuggest()}
      </div>
    );
  }

  private handleSuggestionSelected = (event, { suggestion }) => {
    this.props.onSelect(suggestion);
  }

  private handleSuggestionsFetchRequested = async ({ value }) => {
    this.setState({
      suggestions: await this.props.fetchSuggestions(value),
    });
  }

  private handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
      value: "",
    });
  }

  private handleChange = async (event) => {
    const value = event.target.value;
    this.setState({
      value,
    });
  }

  private renderAutosuggest = () => {
    const { classes } = this.props;
    return (
      <Autosuggest
        getSuggestionValue={getSuggestionValue}
        inputProps={{
          className: classes.input,
          onChange: this.handleChange,
          placeholder: "Search",
          value: this.state.value,
        }}
        onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
        onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
        onSuggestionSelected={this.handleSuggestionSelected}
        renderSuggestion={renderSuggestion}
        renderSuggestionsContainer={renderSuggestionsContainer}
        suggestions={this.state.suggestions}
        theme={{
          suggestion: classes.suggestion,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
        }}
      />
    );
  }
}

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

const Search: React.SFC<Props> = props => <Styled {...props} />;

export default Search;
