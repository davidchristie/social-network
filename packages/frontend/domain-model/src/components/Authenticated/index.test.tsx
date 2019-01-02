import { mount, ReactWrapper } from "enzyme";
import React from "react";
import {
  MockedProvider,
  MockedResponse
} from "react-apollo/test-utils";
import { beforeEachWaitForUpdate, itContainsComponent } from "test-utilities/enzyme";
import Authenticated from ".";
import ACCOUNT_QUERY from "../../queries/Account";
import mockAccountResponse from "../../queries/mockAccountResponse";

const TestChildren: React.StatelessComponent = () => null;
const responsesWhenAuthenticated: ReadonlyArray<MockedResponse> = [
  mockAccountResponse(),
];
const responsesWhenUnauthenticated: ReadonlyArray<MockedResponse> = [
  {
    request: {
      query: ACCOUNT_QUERY,
    },
    result: {
      data: {
        account: null,
      },
    },
  },
];

function itRendersNothing (getWrapper: () => ReactWrapper) {
  it("renders nothing", () => {
    expect(getWrapper().html()).toBeNull();
  });
}

function mountWithResponses (responses: ReadonlyArray<MockedResponse>) {
  return mount(
    <MockedProvider mocks={responses}>
      <Authenticated>
        <TestChildren />
      </Authenticated>
    </MockedProvider>
  );
}

describe("Authenticated component", () => {
  let wrapper: ReactWrapper;

  describe("when authenticated", () => {
    beforeEach(() => {
      wrapper = mountWithResponses(responsesWhenAuthenticated);
    });

    describe("while loading", () => {
      itRendersNothing(() => wrapper);
    });

    describe("once loading is complete", () => {
      beforeEachWaitForUpdate(() => wrapper);

      itContainsComponent("renders children", () => wrapper, TestChildren);
    });
  });

  describe("when unauthenticated", () => {
    beforeEach(() => {
      wrapper = mountWithResponses(responsesWhenUnauthenticated);
    });

    describe("while loading", () => {
      itRendersNothing(() => wrapper);
    });

    describe("once loading is complete", () => {
      beforeEachWaitForUpdate(() => wrapper);

      itRendersNothing(() => wrapper);
    });
  });
});
