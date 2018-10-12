import gql from "graphql-tag";

export interface UpdateAccountData {
  updateAccount: {
    email: string;
    id: string;
  };
}

export interface UpdateAccountVariables {
  data: {
    email?: string;
  };
}

const UpdateAccount = gql`
  mutation UpdateAccount($data: AccountUpdateInput!) {
    updateAccount(data: $data) {
      email
      id
    }
  }
`;

export default UpdateAccount;
