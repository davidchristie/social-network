import React from "react";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter } from "react-router-dom";

import apollo from "../../apollo";
import Layout from "../Layout";
import Routes from "../Routes";
import "./index.css";

export default class Application extends React.Component {
  public render () {
    return (
      <div className="Application">
        <ApolloProvider client={apollo}>
          <BrowserRouter>
            <Layout>
              <Routes />
            </Layout>
          </BrowserRouter>
        </ApolloProvider>
      </div>
    );
  }
}
