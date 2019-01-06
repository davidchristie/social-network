import { Input } from "design-system";
import { mount, ReactWrapper } from "enzyme";
import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import { MemoryRouter } from "react-router-dom";
import LoginForm from ".";
import Content, { State } from "./Content";

function itContainsInputWithName (
  getWrapper: () => ReactWrapper,
  name: string
) {
  it(`contains ${name} input`, () => {
    const input = getInputWithName(getWrapper(), name);
    expect(input.exists()).toBe(true);
  });
}

function getInputWithName (wrapper: ReactWrapper, name: string) {
  return wrapper
    .find(Input)
    .filter({
      name,
    })
    .find("input")
    .first();
}

function itUpdatesStateWhenInputIsChanged (
  getWrapper: () => ReactWrapper<any, any>,
  name: string
) {
  it(`updates state when ${name} is changed`, () => {
    const wrapper = getWrapper();
    const input = getInputWithName(wrapper, name);
    const newValue = "new_value";
    input.simulate("change", {
      target: {
        value: newValue,
      },
    });
    expect(wrapper.state()[name]).toEqual(newValue);
  });
}

describe("LoginForm component", () => {
  let wrapper: ReactWrapper<any, State>;

  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter>
        <MockedProvider>
          <LoginForm />
        </MockedProvider>
      </MemoryRouter>
    ).find(Content);
  });

  itContainsInputWithName(() => wrapper, "email");

  itContainsInputWithName(() => wrapper, "password");

  itUpdatesStateWhenInputIsChanged(() => wrapper, "email");

  itUpdatesStateWhenInputIsChanged(() => wrapper, "password");

  it("submits without errors", () => {
    wrapper.find("form").simulate("submit");
  });
});
