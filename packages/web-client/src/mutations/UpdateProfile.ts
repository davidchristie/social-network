import gql from "graphql-tag";

export interface UpdateProfileData {
  updateProfile: {
    id: string;
    name: string;
  };
}

export interface UpdateProfileVariables {
  data: {
    name?: string;
  };
}

export default gql`
  mutation UpdateProfile($data: ProfileUpdateInput!) {
    updateProfile(data: $data) {
      id
      name
    }
  }
`;
