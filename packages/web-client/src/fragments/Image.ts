import gql from "graphql-tag";

export interface ImageData {
  url: string;
}

export default gql`
  fragment Image on Image {
    url
  }
`;
