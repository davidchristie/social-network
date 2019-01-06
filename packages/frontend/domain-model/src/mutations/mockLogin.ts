import { MockedResponse } from "react-apollo/test-utils";
import { LoginVariables } from "../generated/types";
import LOGIN_MUTATION from "./Login";

const mockLogin = (variables: LoginVariables): MockedResponse => ({
  request: {
    query: LOGIN_MUTATION,
    variables,
  },
  result: {
    data: {
      login: {
        __typename: "LoginPayload",
        token: "token",
      },
    },
  },
});

export default mockLogin;
