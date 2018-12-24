import { MockedResponse } from "react-apollo/test-utils";
import { SignupVariables } from "../generated/types";
import SIGN_MUTATION from "./Signup";

const mockSignup = (variables: SignupVariables): MockedResponse => ({
  request: {
    query: SIGN_MUTATION,
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
