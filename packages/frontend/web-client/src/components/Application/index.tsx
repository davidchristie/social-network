import { Theme } from "design-system";
import { DomainModelProvider } from "domain-model";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Routes from "../Routes";

export default class Application extends React.Component {
  public render () {
    return (
      <div className="Application">
        <BrowserRouter>
          <DomainModelProvider>
            <Theme>
              <Layout>
                <Routes />
              </Layout>
            </Theme>
          </DomainModelProvider>
        </BrowserRouter>
      </div>
    );
  }
}
