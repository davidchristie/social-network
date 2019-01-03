import { MockedResponse } from "react-apollo/test-utils";
import { SignupVariables } from "../generated/types";
import SIGNUP_MUTATION from "./Signup";

const mockSignup = (variables: SignupVariables): MockedResponse => ({
  request: {
    query: SIGNUP_MUTATION,
    variables,
  },
  result: {
    data: {
      signup: {
        __typename: "SignupPayload",
        token: "token",
      },
    },
  },
});

export default mockSignup;
