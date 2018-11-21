import gql from "graphql-tag";

import ImageFragment, {
  ImageData
} from "../fragments/Image";

export interface AccountData {
  account: {
    __typename: "Account";
    email: string;
    id: string;
    name: string;
    profile: {
      __typename: "Profile";
      avatar: ImageData | null;
      followers: Array<{
        __typename: "Profile";
        avatar: ImageData | null;
        id: string;
        name: string;
      }>;
      following: Array<{
        __typename: "Profile";
        avatar: ImageData | null;
        id: string;
        name: string;
      }>;
      id: string;
      name: string;
    };
  } | null;
}

export interface AccountVariables { }

const Account = gql`
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
        followers {
          avatar {
            ...Image
          }
          id
          name
        }
        following {
          avatar {
            ...Image
          }
          id
          name
        }
        id
        name
      }
    }
  }
`;

export default Account;
