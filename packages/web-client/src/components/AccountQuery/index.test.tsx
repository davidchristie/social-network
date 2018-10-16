import { mount } from "enzyme";
import React from "react";
import {
  MockedProvider,
  MockedResponse
} from "react-apollo/test-utils";

import Account, { AccountData } from "../../queries/Account";
import AccountQuery from "./index";

const mockData: AccountData = {
  account: null,
};

const mocks: ReadonlyArray<MockedResponse> = [
  {
    request: {
      query: Account,
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
