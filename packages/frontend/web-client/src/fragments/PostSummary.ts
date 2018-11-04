import gql from "graphql-tag";

import { ImageData } from "../fragments/Image";

export interface PostSummaryData {
  createdAt: string;
  createdBy: {
    avatar: ImageData | null;
    id: string;
    name: string;
  };
  id: string;
  text: string;
}

const PostSummary = gql`
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

export default PostSummary;
