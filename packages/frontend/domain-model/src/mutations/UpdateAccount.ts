import gql from "graphql-tag";

const UpdateAccount = gql`
  mutation UpdateAccount($data: AccountUpdateInput!) {
    updateAccount(data: $data) {
      email
      id
    }
  }
`;

export default UpdateAccount;
