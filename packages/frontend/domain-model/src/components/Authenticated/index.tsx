import React from "react";
import AccountQuery from "../AccountQuery";

const Authenticated: React.StatelessComponent = ({ children }) => (
  <AccountQuery>
    {({ data, error, loading }) => {
      if (!data || data.account === null || error || loading) {
        return null;
      }
      return children;
    }}
  </AccountQuery>
);

export default Authenticated;
