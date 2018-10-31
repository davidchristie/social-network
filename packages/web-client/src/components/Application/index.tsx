import { Theme } from "design-system";
import React from "react";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter } from "react-router-dom";

import apollo from "../../apollo";
import Layout from "../Layout";
import Routes from "../Routes";

export default class Application extends React.Component {
  public render () {
    return (
      <div className="Application">
        <ApolloProvider client={apollo}>
          <BrowserRouter>
            <Theme>
              <Layout>
                <Routes />
              </Layout>
            </Theme>
          </BrowserRouter>
        </ApolloProvider>
      </div>
    );
  }
}
