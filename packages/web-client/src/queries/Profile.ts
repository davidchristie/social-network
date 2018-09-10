import gql from "graphql-tag";

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
  query Profile($id: String!) {
    profile(id: $id) {
      id
      name
      posts {
        createdAt
        createdBy {
          id
          name
        }
        id
        text
      }
    }
  }
`;
