import gql from "graphql-tag";

const Image = gql`
  fragment Image on Image {
    id
    url
  }
`;

export default Image;
