import { mount } from "enzyme";
import React from "react";
import { MockedProvider, MockedResponse } from "react-apollo/test-utils";
import { MemoryRouter } from "react-router-dom";

import Header from ".";
import AccountQuery from "../../queries/Account";
import wait from "../../utilities/wait";

function mountWithProviders<T extends React.ComponentType> (
  Component: T,
  mocks: ReadonlyArray<MockedResponse>
) {
  return mount(
    <MockedProvider mocks={mocks}>
      <MemoryRouter>
        <Component />
      </MemoryRouter>
    </MockedProvider>
  );
}

describe("Header component", () => {
  it("while loading", async () => {
    const mocks = [
      {
        request: {
          query: AccountQuery,
        },
      },
    ];
    const wrapper = mountWithProviders(Header, mocks);
    expect(wrapper.find(Header)).toMatchSnapshot();
  });

  it("when logged out", async () => {
    const mocks = [
      {
        request: {
          query: AccountQuery,
        },
        result: {
          data: {
            account: null,
          },
        },
      },
    ];
    const wrapper = mountWithProviders(Header, mocks);
    await wait(0);
    wrapper.update();
    expect(wrapper.find(Header)).toMatchSnapshot();
  });
});
