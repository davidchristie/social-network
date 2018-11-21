import { InMemoryCache } from "apollo-cache-inmemory";
import { Alert, Loading } from "design-system";
import { mount, ReactWrapper } from "enzyme";
import React from "react";
import { MockedProvider, MockedResponse } from "react-apollo/test-utils";
import { beforeEachWaitForUpdate, itContainsComponent } from "test-utilities/enzyme";
import mockFollowProfile from "../../mutations/mockFollowProfile";
import mockUnfollowProfile from "../../mutations/mockUnfollowProfile";
import mockAccountResponse from "../../queries/mockAccountResponse";
import Data from "./Data";

const profileId = "profile_id";
const Content: React.ComponentType<any> = () => null;
const responses: MockedResponse[] = [
  mockAccountResponse(),
  mockFollowProfile({ id: profileId }),
  mockUnfollowProfile({ id: profileId }),
];


describe("Data component", () => {
  let writeQuery: jest.Mock;
  let cache: InMemoryCache;
  let wrapper: ReactWrapper;

  beforeEach(() => {
    cache = new InMemoryCache();
    writeQuery = jest.fn(cache.writeQuery);
    cache.writeQuery = writeQuery;
    wrapper = mount(
      <MockedProvider
        addTypename={true}
        cache={cache}
        mocks={responses}
      >
        <Data content={Content} profileId={profileId} />
      </MockedProvider>
    );
  });

  describe("loading state", () => {
    itContainsComponent("renders loading component", () => wrapper, Loading);
  });

  describe("loaded content", () => {
    beforeEachWaitForUpdate(() => wrapper);

    itContainsComponent("renders content component", () => wrapper, Content);

    describe(`when "followProfile" mutation is performed`, () => {
      beforeEach(async () => {
        await wrapper.find(Content).props().followProfile();
      });

      it("updates the cache", async () => {
        expect(writeQuery).toBeCalledTimes(1);
        expect(
          writeQuery.mock.calls[0][0].data.account.profile.following.some(followedProfile => {
            return followedProfile.id === profileId;
          })
        ).toBe(true);
      });

      describe(`when "unfollowProfile" mutation is performed`, () => {
        beforeEach(async () => {
          await wrapper.find(Content).props().unfollowProfile();
        });

        it("updates the cache", () => {
          expect(writeQuery).toBeCalledTimes(2);
          expect(
            writeQuery.mock.calls[1][0].data.account.profile.following.some(followedProfile => {
              return followedProfile.id === profileId;
            })
          ).toBe(false);
        });
      });
    });

  });

  describe("on error", () => {
    const errorMessage = "error_message";

    beforeEach(() => {
      wrapper = mount(
        <MockedProvider
          addTypename={true}
          mocks={[
            {
              ...mockAccountResponse(),
              error: new Error(errorMessage),
              result: {
                data: undefined,
              },
            },
          ]}
        >
          <Data content={Content} profileId={profileId} />;
        </MockedProvider>
      );
    });

    beforeEachWaitForUpdate(() => wrapper);

    it("renders error message", () => {
      expect(wrapper.containsMatchingElement(
        <Alert>Network error: {errorMessage}</Alert>
      )).toBe(true);
    });
  });
});
