import { Alert, Button, Input, Section } from "design-system";
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

interface Props {
  data: AccountData;
}

interface State {
  avatarUrl: string;
  name: string;
}

class UpdateProfileForm extends React.Component<Props, State> {
  public state: State = {
    avatarUrl: this.props.data.account!.profile.avatar
      ? this.props.data.account!.profile.avatar!.url
      : "",
    name: this.props.data.account!.profile.name,
  };

  public render () {
    return (
      <Mutation<UpdateProfileData, UpdateProfileVariables>
        mutation={UpdateProfileMutation}
        variables={{
          data: {
            avatarUrl: this.state.avatarUrl.trim().length > 0
              ? this.state.avatarUrl
              : null,
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
              <Input
                label="Name"
                name="name"
                onChange={this.nameChanged}
                required={true}
                value={this.state.name}
              />
              <Input
                label="Avatar URL"
                name="avatar-url"
                onChange={this.avatarUrlChanged}
                type="url"
                value={this.state.avatarUrl}
              />
              <Button type="submit">Save</Button>
            </form>
          </Section>
        )}
      </Mutation>
    );
  }

  private avatarUrlChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      avatarUrl: event.target.value,
    });
  }

  private nameChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      name: event.target.value,
    });
  }
}

export default function UpdateProfileFormContainer () {
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
        return <UpdateProfileForm data={data!} />;
      }}
    </Query>
  );
}
