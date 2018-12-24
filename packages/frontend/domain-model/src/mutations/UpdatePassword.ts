import gql from "graphql-tag";

const UpdatePassword = gql`
  mutation UpdatePassword($data: PasswordUpdateInput!) {
    updatePassword(data: $data) {
      id
    }
  }
`;

export default UpdatePassword;
