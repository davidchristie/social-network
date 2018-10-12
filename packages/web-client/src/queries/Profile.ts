import gql from "graphql-tag";

import ImageFragment, {
  ImageData
} from "../fragments/Image";
import PostSummaryFragment from "../fragments/PostSummary";

export interface ProfileData {
  profile: {
    avatar: ImageData | null;
    id: string;
    name: string;
    posts: Array<{
      createdAt: string;
      createdBy: {
        avatar: ImageData | null;
        id: string;
        name: string;
      };
      id: string;
      text: string;
    }>
  };
}

export interface ProfileVariables {
  id: string;
}

const Profile = gql`
  ${ImageFragment}
  ${PostSummaryFragment}
  query Profile($id: String!) {
    profile(id: $id) {
      avatar {
        ...Image
      }
      id
      name
      posts {
        ...PostSummary
      }
    }
  }
`;

export default Profile;
