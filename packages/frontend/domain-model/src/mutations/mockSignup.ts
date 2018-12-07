import { MockedResponse } from "react-apollo/test-utils";
import Signup, { SignupVariables } from "./Signup";

const mockSignup = (variables: SignupVariables): MockedResponse => ({
  request: {
    query: Signup,
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
