import React from "react";
import { Mutation } from "react-apollo";
import { AUTHENTICATION_TOKEN } from "../../constants";
import { Login, LoginVariables } from "../../generated/types";
import LOGIN_MUTATION from "../../mutations/Login";
import AccountQuery from "../../queries/Account";
import { Props as ContentProps } from "./Content";

export interface Props {
  content: React.ComponentType<ContentProps>;
}

const Data: React.StatelessComponent<Props> = ({ content: Content }) => {
  return (
    <Mutation<Login, LoginVariables>
      mutation={LOGIN_MUTATION}
      refetchQueries={[
        {
          query: AccountQuery,
        },
      ]}
      update={(_, { data }) => {
        const { token } = data!.login;
        window.localStorage.setItem(AUTHENTICATION_TOKEN, token);
      }}
    >
      {(login) => <Content login={login} />}
    </Mutation>
  );
};

export default Data;
