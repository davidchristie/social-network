import gql from "graphql-tag";

export interface PostSummaryData {
  createdAt: string;
  createdBy: {
    id: string;
    name: string;
  };
  id: string;
  text: string;
}

export default gql`
  fragment PostSummary on Post {
    createdAt
    createdBy {
      id
      name
    }
    id
    text
  }
`;
