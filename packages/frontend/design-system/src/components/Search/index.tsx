import React from "react";

import Styled from "./Styled";

export interface Suggestion {
  id: string;
  name: string;
}

export interface Props {
  fetchSuggestions: (value: string) => Promise<Suggestion[]>;
  onSelect: (selected: Selection) => void;
}

const Search: React.SFC<Props> = props => <Styled {...props} />;

export default Search;
