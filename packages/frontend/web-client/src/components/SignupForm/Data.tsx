import React from "react";
import { Mutation } from "react-apollo";
import SignupMutation, {
  SignupData,
  SignupVariables,
} from "../../mutations/Signup";
import AccountQuery from "../../queries/Account";
import { Props as ContentProps } from "./Content";

export interface Props {
  content: React.ComponentType<ContentProps>;
}

const Data: React.StatelessComponent<Props> = ({ content: Content }) => {
  return (
    <Mutation<SignupData, SignupVariables>
      mutation={SignupMutation}
      refetchQueries={[
        {
          query: AccountQuery,
        },
      ]}
    >
      {(signup) => {
        return <Content signup={signup} />;
      }}
    </Mutation>
  );
};

export default Data;
