import { FetchResult } from "react-apollo";
import { MockedResponse } from "react-apollo/test-utils";
import AccountQuery, { AccountData, AccountVariables } from "./Account";

const accountResult: FetchResult<AccountData, AccountVariables> = {
  data: {
    account: {
      __typename: "Account",
      email: "account@email.com",
      id: "account_id",
      name: "Account",
      profile: {
        __typename: "Profile",
        avatar: {
          __typename: "Image",
          id: "avatar_id",
          url: "https://avatar_url.com",
        },
        followers: [
          {
            __typename: "Profile",
            avatar: null,
            id: "follower_id",
            name: "Follower",
          },
        ],
        following: [
          {
            __typename: "Profile",
            avatar: null,
            id: "following_id",
            name: "Following",
          },
        ],
        id: "profile_id",
        name: "Profile",
      },
    },
  },
};

const mockAccountResponse = (): MockedResponse => ({
  request: {
    query: AccountQuery,
  },
  result: accountResult,
});

export default mockAccountResponse;
