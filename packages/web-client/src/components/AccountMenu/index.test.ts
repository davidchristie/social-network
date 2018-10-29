import {
  describeWithNoProps,
  describeWithProps
} from "test-utilities/react";

import { Result } from "../AccountQuery";
import AccountMenu, { AccountMenuContent } from "./index";

describe("AccountMenu component", () => {
  describeWithNoProps(AccountMenu);
});

describe("AccountMenuContent component", () => {
  describeWithProps(
    "renders loading state",
    AccountMenuContent,
    {
      loading: true,
    }
  );

  describeWithProps(
    "renders profile with no avatar",
    AccountMenuContent,
    {
      data: {
        account: {
          __typename: "Account",
          email: "user@email.com",
          id: "USER_ID",
          name: "User",
          profile: {
            __typename: "Profile",
            avatar: null,
            id: "PROFILE_ID",
            name: "user",
          },
        },
      },
    } as Result
  );
});
