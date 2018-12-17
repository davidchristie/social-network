import { mount } from "enzyme";
import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import UpdatePasswordForm from ".";
import Data from "./Data";

describe("UpdatePasswordForm component", () => {
  it("renders data component", () => {
    const wrapper = mount(
      <MockedProvider>
        <UpdatePasswordForm />
      </MockedProvider>
    );
    expect(wrapper.find(Data).exists()).toBe(true);
  });
});
