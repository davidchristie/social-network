import gql from "graphql-tag";
import ImageFragment, { ImageData } from "../fragments/Image";

export interface FollowProfileData {
  followProfile: {
    __typename: "Profile";
    avatar: ImageData | null;
    id: string;
    name;
  };
}

export interface FollowProfileVariables {
  id: string;
}

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
