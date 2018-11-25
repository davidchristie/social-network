import { Alert, Loading } from "design-system";
import React from "react";
import AccountQuery from "../AccountQuery";
import Content from "./Content";

export default class Routes extends React.Component {
  public render () {
    return (
      <AccountQuery>
        {({ data, error, loading }) => {
          if (error) {
            return <Alert>{error.message}</Alert>;
          }
          if (!data || loading) {
            return <Loading />;
          }
          const authenticated = Boolean(data.account);
          return <Content authenticated={authenticated} />;
        }}
      </AccountQuery>
    );
  }
}
