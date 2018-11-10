import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import { isWidthUp } from "@material-ui/core/withWidth/withWidth";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";
import React from "react";
import Autosuggest from "react-autosuggest";

import { Props, Suggestion } from ".";
import Icon from "../Icon";

type ContentProps = Props
  & WithStyles<"input">
  & WithStyles<"root">
  & WithStyles<"search">
  & WithStyles<"suggestion">
  & WithStyles<"suggestionsContainerOpen">
  & WithStyles<"suggestionsList">
  & { width: Breakpoint; };

interface ContentState {
  suggestions: Suggestion[];
  value: string;
}

function renderSuggestion (suggestion: Suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.name, query);
  const parts = parse(suggestion.name, matches);
  return (
    <MenuItem component="div" selected={isHighlighted}>
      {parts.map((part, index) => {
        const style: React.CSSProperties = {
          whiteSpace: "pre-wrap",
        };
        const highlightedStyle: React.CSSProperties = {
          ...style,
          // fontWeight: "bold",
          textShadow: "0px 0px 1px rgba(0,0,0,0.5)",
        };
        return (
          <span key={index} style={part.highlight ? highlightedStyle : style}>
            {part.text}
          </span>
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

export default class Content extends React.Component<ContentProps, ContentState> {
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
