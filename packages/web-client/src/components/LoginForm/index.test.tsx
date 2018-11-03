import { Input } from "design-system";
import { mount, ReactWrapper } from "enzyme";
import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import { MemoryRouter } from "react-router-dom";

import LoginForm, { State } from ".";

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
    const emailInput = wrapper
      .find(Input)
      .filter({
        name: "email",
      })
      .first();
    expect(emailInput.exists()).toBe(true);
  });

  it("contains password input", async () => {
    const passwordInput = wrapper
      .find(Input)
      .filter({
        name: "password",
      })
      .first();
    expect(passwordInput.exists()).toBe(true);
  });

  it("updates state when email is changed", () => {
    const emailInput = wrapper
      .find(Input)
      .filter({
        name: "email",
      })
      .find("input");
    const newValue = "new_value";
    emailInput.simulate("change", {
      target: {
        value: newValue,
      },
    });
    expect(wrapper.state().email).toEqual(newValue);
  });

  it("updates state when password is changed", () => {
    const passwordInput = wrapper
      .find(Input)
      .filter({
        name: "password",
      })
      .find("input");
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
