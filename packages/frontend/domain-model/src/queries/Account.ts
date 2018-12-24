import gql from "graphql-tag";
import ImageFragment from "../fragments/Image";

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
