import React from "react";
import { Mutation } from "react-apollo";
import { AUTHENTICATION_TOKEN } from "../../constants";
import { Login, LoginVariables } from "../../generated/types";
import LOGIN_MUTATION from "../../mutations/Login";
import AccountQuery from "../../queries/Account";
import Content from "./Content";

export default class LoginForm extends React.Component {
  public render () {
    return (
      <Mutation<Login, LoginVariables>
        mutation={LOGIN_MUTATION}
        refetchQueries={[
          {
            query: AccountQuery,
          },
        ]}
        update={({ }, { data }) => {
          if (data) {
            const { token } = data.login;
            window.localStorage.setItem(AUTHENTICATION_TOKEN, token);
          }
        }}
      >
        {(login) => <Content login={login} />}
      </Mutation>
    );
  }
}
