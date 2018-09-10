import gql from "graphql-tag";

import PostSummaryFragment from "../fragments/PostSummary";

export interface ProfileData {
  profile: {
    id: string;
    name: string;
    posts: Array<{
      createdAt: string;
      createdBy: {
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

export default gql`
  ${PostSummaryFragment}
  query Profile($id: String!) {
    profile(id: $id) {
      id
      name
      posts {
        ...PostSummary
      }
    }
  }
`;
