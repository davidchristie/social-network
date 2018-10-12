import gql from "graphql-tag";

export interface DeletePostData {
  deletePost: {
    id: string;
  };
}

export interface DeletePostVariables {
  id: string;
}

const DeletePost = gql`
  mutation DeletePost($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`;

export default DeletePost;
