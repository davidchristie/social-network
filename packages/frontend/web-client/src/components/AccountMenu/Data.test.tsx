import { Loading } from "design-system";
import { mount, ReactWrapper } from "enzyme";
import React from "react";
import { MockedProvider, MockedResponse } from "react-apollo/test-utils";
import { beforeEachWaitForUpdate, itContainsComponent } from "test-utilities/enzyme";
import AccountQuery, {
  AccountData
} from "../../queries/Account";
import ProfileQuery, {
  ProfileData
} from "../../queries/Profile";
import Data from "./Data";

const Content: React.ComponentType<any> = () => null;
const accountResult: AccountData = {
  account: {
    __typename: "Account",
    email: "account@email.com",
    id: "account_id",
    name: "Account",
    profile: {
      __typename: "Profile",
      avatar: null,
      id: "profile_id",
      name: "Profile",
    },
  },
};
const profileResult: ProfileData = {
  profile: {
    avatar: null,
    id: "profile_id",
    name: "Profile",
    posts: [],
  },
};
const mocks: MockedResponse[] = [
  {
    request: {
      query: AccountQuery,
    },
    result: {
      data: accountResult,
    },
  },
  {
    request: {
      query: ProfileQuery,
      variables: {
        id: profileResult.profile.id,
      },
    },
    result: {
      data: profileResult,
    },
  },
];

describe("Data component", () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(
      <MockedProvider addTypename={false} mocks={mocks}>
        <Data content={Content} />;
      </MockedProvider>
    );
  });

  describe("loading state", () => {
    itContainsComponent("renders loading component", () => wrapper, Loading);
  });

  describe("loaded content", () => {
    beforeEachWaitForUpdate(() => wrapper);

    itContainsComponent("renders content component", () => wrapper, Content);
  });
});
