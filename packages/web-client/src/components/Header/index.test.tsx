import { mount } from "enzyme";
import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import { MemoryRouter } from "react-router-dom";

import Header from ".";
import AccountQuery from "../../queries/Account";
import wait from "../../utilities/wait";

describe("Header component", () => {
  it("while loading", async () => {
    const mocks = [
      {
        request: {
          query: AccountQuery,
        },
      },
    ];
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </MockedProvider>
    );
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
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </MockedProvider>
    );
    await wait(0);
    wrapper.update();
    expect(wrapper.find(Header)).toMatchSnapshot();
  });
});
