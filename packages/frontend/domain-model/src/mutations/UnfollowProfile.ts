import gql from "graphql-tag";

const UnfollowProfile = gql`
  mutation UnfollowProfile($id: ID!) {
    unfollowProfile(id: $id) {
      id
    }
  }
`;

export default UnfollowProfile;
