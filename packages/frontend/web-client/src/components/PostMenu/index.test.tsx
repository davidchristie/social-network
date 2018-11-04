import { Button } from "design-system";
import { shallow } from "enzyme";
import React from "react";
import { describeWithProps } from "test-utilities/dist/react";

import PostMenu from ".";
import Dropdown from "../Dropdown";

describe("PostMenu component", () => {
  describeWithProps("with post ID", PostMenu, {
    postId: "xxxx-xxxx-xxxx-xxxx",
  });

  it("opens dropdown when button is clicked", () => {
    const wrapper = shallow(<PostMenu postId="xxxx-xxxx-xxxx-xxxx" />);
    wrapper.find(Button).simulate("click");
    const dropdown = wrapper.find(Dropdown);
    expect(dropdown.props().open).toBe(true);
  });

  it("updates state when dropdown is closed", () => {
    const wrapper = shallow<PostMenu>(<PostMenu postId="xxxx-xxxx-xxxx-xxxx" />);
    const dropdown = wrapper.find(Dropdown);
    dropdown.props().onClose!();
    expect(wrapper.state().isDropdownOpen).toBe(false);
  });
});
