import { Alert, Loading } from "design-system";
import React from "react";
import { Mutation } from "react-apollo";
import { UpdateProfile, UpdateProfileVariables, } from "../../generated/types";
import UPDATE_PROFILE_MUTATION from "../../mutations/UpdateProfile";
import AccountQuery from "../AccountQuery";
import { Props as ContentProps } from "./Content";

interface Props {
  content: React.ComponentType<ContentProps>;
}

const Data: React.ComponentType<Props> = ({ content }) => {
  return (
    <AccountQuery>
      {({ data, error, loading }) => {
        return (
          <Mutation<UpdateProfile, UpdateProfileVariables>
            mutation={UPDATE_PROFILE_MUTATION}
          >
            {(updateProfile) => {
              if (error) {
                return <Alert>{error.message}</Alert>;
              }
              if (!data || !data.account || loading) {
                return <Loading />;
              }
              const { account } = data;
              const Content = content;
              return <Content account={account} updateProfile={updateProfile} />;
            }}
          </Mutation>
        );
      }}
    </AccountQuery>
  );
};

export default Data;
