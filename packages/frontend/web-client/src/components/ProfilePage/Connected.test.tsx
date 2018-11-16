import { Loading } from "design-system";
import { mount, ReactWrapper } from "enzyme";
import React from "react";
import { MockedProvider, MockedResponse } from "react-apollo/test-utils";
import { Route, StaticRouter } from "react-router-dom";
import { beforeEachWaitForUpdate } from "test-utilities/dist/enzyme";
import AccountQuery, {
  AccountData
} from "../../queries/Account";
import ProfileQuery, {
  ProfileData
} from "../../queries/Profile";
import Connected from "./Connected";

const Content: React.ComponentType<any> = () => null;
const accountResult: AccountData = {
  account: null,
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

describe("Connected component", () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(
      <MockedProvider addTypename={false} mocks={mocks}>
        <StaticRouter context={{}} location={`/profile/${profileResult.profile.id}`}>
          <Route
            path="/profile/:id"
            render={() => {
              return <Connected content={Content} />;
            }}
          />
        </StaticRouter>
      </MockedProvider>
    );
  });

  describe("loading state", () => {
    it("renders loading component", () => {
      expect(wrapper.find(Loading).exists()).toBe(true);
    });
  });

  describe("loaded content", () => {
    beforeEachWaitForUpdate(() => wrapper);

    it("renders content component", async () => {
      expect(wrapper.find(Content).exists()).toBe(true);
    });
  });
});
