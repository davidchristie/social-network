import gql from "graphql-tag";

export interface CreatePostData {
  createPost: {
    id: string;
    text: string;
  };
}

export interface CreatePostVariables {
  text: string;
}

export default gql`
  mutation CreatePost($text: String!) {
    createPost(text: $text) {
      id
      text
    }
  }
`;
