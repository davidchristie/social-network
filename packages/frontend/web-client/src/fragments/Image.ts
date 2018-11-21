import gql from "graphql-tag";

export interface ImageData {
  __typename: "Image";
  id: string;
  url: string;
}

const Image = gql`
  fragment Image on Image {
    id
    url
  }
`;

export default Image;
