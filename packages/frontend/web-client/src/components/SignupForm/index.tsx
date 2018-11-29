import React from "react";
import { Mutation } from "react-apollo";
import SignupMutation, {
  SignupData,
  SignupVariables,
} from "../../mutations/Signup";
import AccountQuery from "../../queries/Account";
import Content from "./Content";

const SignupForm: React.StatelessComponent<{}> = () => {
  return (
    <Mutation<SignupData, SignupVariables>
      mutation={SignupMutation}
      refetchQueries={[
        {
          query: AccountQuery,
        },
      ]}
    >
      {(signup) => (
        <Content signup={signup} />
      )}
    </Mutation>
  );
};

export default SignupForm;
