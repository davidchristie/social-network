import { mount } from "enzyme";
import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import { MemoryRouter } from "react-router-dom";

import Header from ".";
import AccountQuery from "../../queries/Account";
import wait from "../../utilities/wait";

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

describe("Header component", () => {
  it("when logged out", async () => {
    const wrapper = mount(
      <MockedProvider addTypename={true} mocks={mocks}>
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
