import gql from "graphql-tag";
import ImageFragment from "../fragments/Image";

const FollowProfile = gql`
  ${ImageFragment}
  mutation FollowProfile($id: ID!) {
    followProfile(id: $id) {
      avatar {
        ...Image
      }
      id
      name
    }
  }
`;

export default FollowProfile;
