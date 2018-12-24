import gql from "graphql-tag";

const DeletePost = gql`
  mutation DeletePost($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`;

export default DeletePost;
