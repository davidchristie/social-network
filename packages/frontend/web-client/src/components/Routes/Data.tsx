import { Alert, Loading } from "design-system";
import React from "react";
import AccountQuery from "../AccountQuery";
import { Props as ContentProps } from "./Content";

export interface Props {
  content: React.ComponentType<ContentProps>;
}

const Data: React.StatelessComponent<Props> = ({ content }) => {
  const Content = content;
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
};

export default Data;
