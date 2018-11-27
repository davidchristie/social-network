import { Alert, Loading } from "design-system";
import React from "react";
import { Mutation } from "react-apollo";
import UpdateAccountMutation, {
  UpdateAccountData,
  UpdateAccountVariables,
} from "../../mutations/UpdateAccount";
import AccountQuery from "../AccountQuery";
import Content from "./Content";

export default function UpdateAccountForm () {
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
}
