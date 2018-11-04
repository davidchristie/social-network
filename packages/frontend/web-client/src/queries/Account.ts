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
        id
        name
      }
    }
  }
`;

export default Account;
