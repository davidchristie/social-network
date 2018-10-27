import { Button } from "design-system";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";

import { AUTHENTICATION_TOKEN } from "../../constants";
import LogoutButton from "./index";

describe("LogoutButton component", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<LogoutButton />);
  });

  it("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("when clicked", () => {
    beforeEach(() => {
      window.localStorage.setItem(AUTHENTICATION_TOKEN, "test_token");
      Object.defineProperty(window.location, "reload", {
        configurable: true,
      });
      window.location.reload = jest.fn();
      wrapper.find(Button).simulate("click");
    });

    it("removes authentication token from local storage", () => {
      expect(window.localStorage.getItem(AUTHENTICATION_TOKEN)).toBeNull();
    });

    it("reloads the page", () => {
      expect(window.location.reload).toHaveBeenCalledTimes(1);
    });
  });
});
