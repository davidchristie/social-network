import { Alert, Loading } from "design-system";
import { mount, ReactWrapper } from "enzyme";
import React from "react";
import { MockedProvider, MockedResponse } from "react-apollo/test-utils";
import { beforeEachWaitForUpdate, itContainsComponent } from "test-utilities/enzyme";
import { mountWithMockedResponses } from "test-utilities/react-apollo";
import mockAccountResponse from "../../queries/mockAccountResponse";
import Data from "./Data";

const Content: React.ComponentType<any> = () => null;
const responses: MockedResponse[] = [
  mockAccountResponse(),
];

describe("UpdateAccountForm data", () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mountWithMockedResponses(<Data content={Content} />, responses);
  });

  describe("loading state", () => {
    itContainsComponent("renders loading component", () => wrapper, Loading);
  });

  describe("loaded content", () => {
    beforeEachWaitForUpdate(() => wrapper);

    itContainsComponent("renders content component", () => wrapper, Content);
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
          <Data content={Content} />;
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
