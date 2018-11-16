import { mount } from "enzyme";
import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import AccountMenu from ".";

describe("AccountMenu component", () => {
  it("renders without crashing", () => {
    mount(
      <MockedProvider>
        <AccountMenu />
      </MockedProvider>
    );
  });
});
