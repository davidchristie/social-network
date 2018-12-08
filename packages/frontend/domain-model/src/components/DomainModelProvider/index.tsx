import React from "react";
import { ApolloProvider } from "react-apollo";
import apollo from "../../apollo";

const DomainModelProvider: React.StatelessComponent = ({ children }) => (
  <ApolloProvider client={apollo}>
    {children}
  </ApolloProvider>
);

export default DomainModelProvider;
