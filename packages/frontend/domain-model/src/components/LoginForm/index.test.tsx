import { Input } from "design-system";
import { mount, ReactWrapper } from "enzyme";
import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import { MemoryRouter } from "react-router-dom";
import LoginForm, { State } from ".";

function getInputWithName (wrapper: ReactWrapper, name: string) {
  return wrapper
    .find(Input)
    .filter({
      name,
    })
    .find("input")
    .first();
}

function itContainsInputWithName (
  getWrapper: () => ReactWrapper<any, any>,
  name: string
) {
  it(`updates state when ${name} is changed`, () => {
    const wrapper = getWrapper();
    const passwordInput = getInputWithName(wrapper, "password");
    const newValue = "new_value";
    passwordInput.simulate("change", {
      target: {
        value: newValue,
      },
    });
    expect(wrapper.state().password).toEqual(newValue);
  });
}

function itUpdatesStateWhenInputIsChanged (
  getWrapper: () => ReactWrapper,
  name: string
) {
  it(`contains ${name} input`, () => {
    const input = getInputWithName(getWrapper(), name);
    expect(input.exists()).toBe(true);
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
    ).find(LoginForm);
  });

  itContainsInputWithName(() => wrapper, "email");

  itContainsInputWithName(() => wrapper, "password");

  itUpdatesStateWhenInputIsChanged(() => wrapper, "email");

  itUpdatesStateWhenInputIsChanged(() => wrapper, "password");

  it("submits without errors", () => {
    wrapper.find("form").simulate("submit");
  });
});
