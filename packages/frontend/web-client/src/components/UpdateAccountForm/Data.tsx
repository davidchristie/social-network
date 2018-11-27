import { Alert, Loading } from "design-system";
import React from "react";
import { Mutation } from "react-apollo";
import UpdateAccountMutation, {
  UpdateAccountData,
  UpdateAccountVariables,
} from "../../mutations/UpdateAccount";
import AccountQuery from "../AccountQuery";
import { Props as ContentProps } from "./Content";

export interface Props {
  content: React.ComponentType<ContentProps>;
}

const Data: React.StatelessComponent<Props> = ({ content }) => {
  return (
    <AccountQuery>
      {({ data, error, loading }) => {
        if (error) {
          return <Alert>{error.message}</Alert>;
        }
        if (!data || !data.account || loading) {
          return <Loading />;
        }
        const { account } = data;
        return (
          <Mutation<UpdateAccountData, UpdateAccountVariables>
            mutation={UpdateAccountMutation}
          >
            {updateAccount => {
              const Content = content;
              return (
                <Content
                  account={account}
                  updateAccount={updateAccount}
                />
              );
            }}
          </Mutation>
        );
      }}
    </AccountQuery>
  );
};

export default Data;
