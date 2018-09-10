import gql from "graphql-tag";

import { ImageData } from "../fragments/Image";

export interface PostSummaryData {
  createdAt: string;
  createdBy: {
    avatar: ImageData;
    id: string;
    name: string;
  };
  id: string;
  text: string;
}

export default gql`
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
