import gql from "graphql-tag";

export interface UpdatePasswordData {
  updatePassword: {
    id: string;
  };
}

export interface UpdatePasswordVariables {
  data: {
    currentPassword: string;
    newPassword: string;
  };
}

export default gql`
  mutation UpdatePassword($data: PasswordUpdateInput!) {
    updatePassword(data: $data) {
      id
    }
  }
`;
