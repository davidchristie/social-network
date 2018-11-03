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

  it("contains email input", async () => {
    const emailInput = getInputWithName(wrapper, "email");
    expect(emailInput.exists()).toBe(true);
  });

  it("contains password input", async () => {
    const passwordInput = getInputWithName(wrapper, "password");
    expect(passwordInput.exists()).toBe(true);
  });

  it("updates state when email is changed", () => {
    const emailInput = getInputWithName(wrapper, "email");
    const newValue = "new_value";
    emailInput.simulate("change", {
      target: {
        value: newValue,
      },
    });
    expect(wrapper.state().email).toEqual(newValue);
  });

  it("updates state when password is changed", () => {
    const passwordInput = getInputWithName(wrapper, "password");
    const newValue = "new_value";
    passwordInput.simulate("change", {
      target: {
        value: newValue,
      },
    });
    expect(wrapper.state().password).toEqual(newValue);
  });

  it("submits without errors", () => {
    wrapper.find("form").simulate("submit");
  });
});
