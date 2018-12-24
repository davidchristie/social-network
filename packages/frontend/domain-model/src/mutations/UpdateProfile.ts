import gql from "graphql-tag";
import ImageFragment from "../fragments/Image";

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
