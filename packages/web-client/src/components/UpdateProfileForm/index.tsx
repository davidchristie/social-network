import React from "react";
import { Mutation, Query } from "react-apollo";

import UpdateProfileMutation, {
  UpdateProfileData,
  UpdateProfileVariables,
} from "../../mutations/UpdateProfile";
import AccountQuery, {
  AccountData,
  AccountVariables
} from "../../queries/Account";
import Alert from "../Alert";
import Button from "../Button";
import Input from "../Input";
import Section from "../Section";

interface Props {
  data: AccountData;
}

interface State {
  name: string;
}

class UpdateProfileForm extends React.Component<Props, State> {
  public state: State = {
    name: this.props.data.account.profile.name,
  };

  public render () {
    return (
      <Mutation<UpdateProfileData, UpdateProfileVariables>
        mutation={UpdateProfileMutation}
        variables={{
          data: {
            name: this.state.name,
          },
        }}
      >
        {(updateProfile) => (
          <Section className="UpdateProfileForm">
            <form
              onSubmit={(event: React.FormEvent) => {
                event.preventDefault();
                updateProfile();
              }}
            >
              <h2>Profile</h2>
              <div>
                <label htmlFor="signup-name">Name</label>
                <Input
                  id="signup-name"
                  name="name"
                  onChange={this.nameChanged}
                  required={true}
                  value={this.state.name}
                />
              </div>
              <Button type="submit">Save</Button>
            </form>
          </Section>
        )}
      </Mutation>
    );
  }

  private nameChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      name: event.target.value,
    });
  }
}

export default () => (
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
      return <UpdateProfileForm data={data!} />;
    }}
  </Query>
);
