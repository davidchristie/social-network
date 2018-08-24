import gql from "graphql-tag";

export interface AccountData {
  account: {
    email: string;
    id: string;
    name: string;
    profile: {
      id: string;
      name: string;
    };
  };
}

export interface AccountVariables { }

export default gql`
  query Account {
    account {
      email
      id
      name
      profile {
        id
        name
      }
    }
  }
`;
