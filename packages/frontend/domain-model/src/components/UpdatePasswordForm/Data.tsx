import React from "react";
import { Mutation } from "react-apollo";
import { UpdatePassword, UpdatePasswordVariables } from "../../generated/types";
import UPDATE_PASSWORD_MUTATION from "../../mutations/UpdatePassword";
import { Props as ContentProps } from "./Content";

interface Props {
  content: React.ComponentType<ContentProps>;
}

const Data: React.StatelessComponent<Props> = ({
  content: Content,
}) => {
  return (
    <Mutation<UpdatePassword, UpdatePasswordVariables>
      mutation={UPDATE_PASSWORD_MUTATION}
    >
      {(updatePassword) => (
        <Content updatePassword={updatePassword} />
      )}
    </Mutation>
  );
};

export default Data;
