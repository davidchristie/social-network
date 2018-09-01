import gql from "graphql-tag";

export interface ProfileData {
  profile: {
    id: string;
    name: string;
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
    }
  }
`;
