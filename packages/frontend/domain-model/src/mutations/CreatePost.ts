import gql from "graphql-tag";

const CreatePost = gql`
  mutation CreatePost($text: String!) {
    createPost(text: $text) {
      id
      text
    }
  }
`;

export default CreatePost;
