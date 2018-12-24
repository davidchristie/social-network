import gql from "graphql-tag";

const PostSummary = gql`
  fragment PostSummary on Post {
    createdAt
    createdBy {
      avatar {
        ...Image
      }
      id
      name
    }
    id
    text
  }
`;

export default PostSummary;
