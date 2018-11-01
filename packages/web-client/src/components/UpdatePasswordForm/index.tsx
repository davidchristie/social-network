import { Alert, Button, Input, Section } from "design-system";
import React from "react";
import { Mutation, Query } from "react-apollo";

import UpdatePasswordMutation, {
  UpdatePasswordData,
  UpdatePasswordVariables,
} from "../../mutations/UpdatePassword";
import AccountQuery, {
  AccountData,
  AccountVariables
} from "../../queries/Account";

interface Props {
  data: AccountData;
}

interface State {
  currentPassword: string;
  errorMessage: string | null;
  newPassword: string;
}

class UpdatePasswordForm extends React.Component<Props, State> {
  public state: State = {
    currentPassword: "",
    errorMessage: null,
    newPassword: "",
  };

  public render () {
    return (
      <Mutation<UpdatePasswordData, UpdatePasswordVariables>
        mutation={UpdatePasswordMutation}
        onCompleted={() => {
          this.setState({
            currentPassword: "",
            errorMessage: "",
            newPassword: "",
          });
        }}
        onError={error => {
          this.setState({
            errorMessage: error.message,
          });
        }}
        variables={{
          data: {
            currentPassword: this.state.currentPassword,
            newPassword: this.state.newPassword,
          },
        }}
      >
        {(updatePassword) => (
          <Section className="UpdatePasswordForm">
            <h2>Password</h2>
            <form
              onSubmit={(event: React.FormEvent) => {
                event.preventDefault();
                updatePassword();
              }}
            >
              {this.state.errorMessage && (
                <Alert>Current password is incorrect</Alert>
              )}
              <Input
                id="update-password-current"
                label="Current"
                name="current"
                onChange={this.currentPasswordChanged}
                required={true}
                type="password"
                value={this.state.currentPassword}
              />
              <Input
                id="update-password-new"
                label="New"
                name="new"
                onChange={this.newPasswordChanged}
                required={true}
                type="password"
                value={this.state.newPassword}
              />
              <Button type="submit">Save</Button>
            </form>
          </Section>
        )}
      </Mutation>
    );
  }

  private currentPasswordChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      currentPassword: event.target.value,
    });
  }

  private newPasswordChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newPassword: event.target.value,
    });
  }
}

export default function UpdatePasswordFormContainer () {
  return (
    <Query<AccountData, AccountVariables>
      query={AccountQuery}
    >
      {({ data, error, loading }) => {
        if (error) {
          return <Alert>{error.message}</Alert>;
        }
        if (loading) {
          return "Loading";
        }
        return <UpdatePasswordForm data={data!} />;
      }}
    </Query>
  );
}
