import gql from "graphql-tag";

import ImageFragment from "../fragments/Image";

export interface UpdateProfileData {
  updateProfile: {
    avatar: {
      id: string;
      url: string;
    } | null;
    id: string;
    name: string;
  };
}

export interface UpdateProfileVariables {
  data: {
    avatarUrl?: string | null;
    name?: string;
  };
}

const UpdateProfile = gql`
  ${ImageFragment}
  mutation UpdateProfile($data: ProfileUpdateInput!) {
    updateProfile(data: $data) {
      avatar {
        ...Image
      }
      id
      name
    }
  }
`;

export default UpdateProfile;
