import { Alert, Loading } from "design-system";
import React from "react";
import { Mutation, Query } from "react-apollo";
import UpdateProfileMutation, {
  UpdateProfileData,
  UpdateProfileVariables,
} from "../../mutations/UpdateProfile";
import AccountQuery, {
  AccountData,
  AccountVariables
} from "../../queries/Account";
import { Props as ContentProps } from "./Content";

interface Props {
  content: React.ComponentType<ContentProps>;
}

const Data: React.ComponentType<Props> = ({ content }) => {
  return (
    <Query<AccountData, AccountVariables>
      query={AccountQuery}
    >
      {({ data, error, loading }) => {
        return (
          <Mutation<UpdateProfileData, UpdateProfileVariables>
            mutation={UpdateProfileMutation}
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
    </Query>
  );
};

export default Data;
