import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import React from "react";

import "./index.css";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

export default class Theme extends React.Component {
  public render () {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="Theme">
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}
