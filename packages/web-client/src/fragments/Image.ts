import gql from "graphql-tag";

export interface ImageData {
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
