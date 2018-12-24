import { mount } from "enzyme";
import React from "react";
import {
  MockedProvider,
  MockedResponse
} from "react-apollo/test-utils";
import { Account } from "../../generated/types";
import ACCOUNT_QUERY from "../../queries/Account";
import AccountQuery from "./index";

const mockData: Account = {
  account: null,
};

const mocks: ReadonlyArray<MockedResponse> = [
  {
    request: {
      query: ACCOUNT_QUERY,
    },
    result: {
      data: mockData,
    },
  },
];

describe("AccountQuery component", () => {
  it("renders loading state", () => {
    expect.hasAssertions();
    mount(
      <MockedProvider mocks={mocks}>
        <AccountQuery>
          {({ loading }) => {
            expect(loading).toBe(true);
            return null;
          }}
        </AccountQuery>
      </MockedProvider>
    );
  });
});
