import { MockedResponse } from "react-apollo/test-utils";
import AccountQuery from "./Account";

const mockAccountResponse = (): MockedResponse => ({
  request: {
    query: AccountQuery,
  },
  result: {
    data: {
      account: {
        __typename: "Account",
        email: "account@email.com",
        id: "account_id",
        name: "Account",
        profile: {
          __typename: "Profile",
          avatar: {
            __typename: "Avatar",
            id: "avatar_id",
            url: "https://avatar_url.com",
          },
          id: "profile_id",
          name: "Profile",
        },
      },
    },
  },
});

export default mockAccountResponse;
