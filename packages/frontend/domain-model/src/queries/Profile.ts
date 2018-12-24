import gql from "graphql-tag";
import ImageFragment from "../fragments/Image";
import PostSummaryFragment from "../fragments/PostSummary";

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
