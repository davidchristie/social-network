import gql from "graphql-tag";

export interface ImageData {
  id: string;
  url: string;
}

export default gql`
  fragment Image on Image {
    id
    url
  }
`;
