import { Alert, Loading } from "design-system";
import React from "react";
import AccountQuery from "../AccountQuery";
import { Props as ContentProps } from "./Content";

interface Props {
  content: React.ComponentType<ContentProps>;
}

const Data: React.ComponentType<Props> = ({ content }) => {
  const Content = content;
  return (
    <AccountQuery>
      {({ error, loading, data }) => {
        if (error) {
          return <Alert>{error.message}</Alert>;
        }
        if (loading || !data || !data.account) {
          return <Loading />;
        }
        return <Content account={data.account} />;
      }}
    </AccountQuery>
  );
};

export default Data;
