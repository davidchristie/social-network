import gql from "graphql-tag";

import ImageFragment, {
  ImageData
} from "../fragments/Image";

export interface AccountData {
  account: {
    email: string;
    id: string;
    name: string;
    profile: {
      avatar: ImageData | null;
      id: string;
      name: string;
    };
  };
}

export interface AccountVariables { }

export default gql`
  ${ImageFragment}
  query Account {
    account {
      email
      id
      name
      profile {
        avatar {
          ...Image
        }
        id
        name
      }
    }
  }
`;
