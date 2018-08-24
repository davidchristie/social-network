import gql from "graphql-tag";

export interface ItemData {
  __typename: "Item";
  description: string;
  id: string;
  name: string;
  options: Array<{
    name: string;
  }>;
}

export default gql`
  fragment Item on Item {
    description
    id
    name
    options {
      name
    }
  }
`;
