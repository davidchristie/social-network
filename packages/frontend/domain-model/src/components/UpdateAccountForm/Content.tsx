import { Alert, Button, Input, Section } from "design-system";
import React from "react";
import { MutationFn } from "react-apollo";
import {
  UpdateAccountData,
  UpdateAccountVariables,
} from "../../mutations/UpdateAccount";

export interface Props {
  account: {
    email: string;
  };
  updateAccount: MutationFn<UpdateAccountData, UpdateAccountVariables>;
}

export interface State {
  email: string;
  errorMessages: string[];
}

export default class UpdateAccountForm extends React.Component<Props, State> {
  public state: State = {
    email: this.props.account.email,
    errorMessages: [],
  };

  public render () {
    const { updateAccount } = this.props;
    const { email, errorMessages } = this.state;
    return (
      <Section className="UpdateAccountForm">
        <h2>Account</h2>
        <form
          onSubmit={async (event: React.FormEvent) => {
            event.preventDefault();
            const result = await updateAccount({
              variables: {
                data: {
                  email,
                },
              },
            });
            if (result && result.errors) {
              this.setState({
                errorMessages: result.errors.map(error => error.message),
              });
            }
          }}
        >
          {errorMessages.map((errorMessage, index) => (
            <Alert key={index}>{errorMessage}</Alert>
          ))}
          <Input
            id="update-account-email"
            label="Email Address"
            name="email"
            onChange={this.emailChanged}
            required={true}
            type="email"
            value={this.state.email}
          />
          <Button type="submit">Save</Button>
        </form>
      </Section>
    );
  }

  private emailChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      email: event.target.value,
    });
  }
}
