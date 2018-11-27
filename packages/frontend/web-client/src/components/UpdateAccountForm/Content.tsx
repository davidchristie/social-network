import { Button, Input, Section } from "design-system";
import React from "react";
import { MutationFn } from "react-apollo";
import {
  UpdateAccountData,
  UpdateAccountVariables,
} from "../../mutations/UpdateAccount";

interface Props {
  account: {
    email: string;
  };
  updateAccount: MutationFn<UpdateAccountData, UpdateAccountVariables>;
}

interface State {
  email: string;
}

export default class UpdateAccountForm extends React.Component<Props, State> {
  public state: State = {
    email: this.props.account.email,
  };

  public render () {
    const { updateAccount } = this.props;
    const { email } = this.state;
    return (
      <Section className="UpdateAccountForm">
        <h2>Account</h2>
        <form
          onSubmit={(event: React.FormEvent) => {
            event.preventDefault();
            updateAccount({
              variables: {
                data: {
                  email,
                },
              },
            });
          }}
        >
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
