import React from "react";
import { Mutation } from "react-apollo";
import { AUTHENTICATION_TOKEN } from "../../constants";
import { Signup, SignupVariables } from "../../generated/types";
import SIGNUP_MUTATION from "../../mutations/Signup";
import AccountQuery from "../../queries/Account";
import { Props as ContentProps } from "./Content";

export interface Props {
  content: React.ComponentType<ContentProps>;
}

const Data: React.StatelessComponent<Props> = ({ content: Content }) => {
  return (
    <Mutation<Signup, SignupVariables>
      mutation={SIGNUP_MUTATION}
      refetchQueries={[
        {
          query: AccountQuery,
        },
      ]}
      update={(_, { data }) => {
        const token = data!.signup.token;
        window.localStorage.setItem(AUTHENTICATION_TOKEN, token);
      }}
    >
      {(signup) => {
        return <Content signup={signup} />;
      }}
    </Mutation>
  );
};

export default Data;
