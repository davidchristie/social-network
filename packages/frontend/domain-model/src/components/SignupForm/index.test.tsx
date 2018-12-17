import { mount, ReactWrapper } from "enzyme";
import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import { MemoryRouter } from "react-router";
import SignupForm from ".";
import Data from "./Data";

describe("SignupForm component", () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter>
        <MockedProvider>
          <SignupForm />
        </MockedProvider >
      </MemoryRouter>
    );
  });

  it("renders the data component", () => {
    expect(wrapper.find(Data).exists()).toBe(true);
  });
});
