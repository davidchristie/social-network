import React from "react";
import { Mutation } from "react-apollo";
import UpdatePasswordMutation, {
  UpdatePasswordData,
  UpdatePasswordVariables,
} from "../../mutations/UpdatePassword";
import { Props as ContentProps } from "./Content";

interface Props {
  content: React.ComponentType<ContentProps>;
}

const Data: React.StatelessComponent<Props> = ({
  content: Content,
}) => {
  return (
    <Mutation<UpdatePasswordData, UpdatePasswordVariables>
      mutation={UpdatePasswordMutation}
    >
      {(updatePassword) => (
        <Content updatePassword={updatePassword} />
      )}
    </Mutation>
  );
};

export default Data;
