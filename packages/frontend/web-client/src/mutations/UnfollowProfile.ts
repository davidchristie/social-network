import gql from "graphql-tag";

export interface UnfollowProfileData {
  unfollowProfile: {
    __typename: "Profile";
    id: string;
  };
}

export interface UnfollowProfileVariables {
  id: string;
}

const UnfollowProfile = gql`
  mutation FollowProfile($id: ID!) {
    unfollowProfile(id: $id) {
      id
    }
  }
`;

export default UnfollowProfile;
