import { Button, Menu } from "design-system";
import { shallow } from "enzyme";
import React from "react";
import { describeWithProps } from "test-utilities/dist/react";
import PostMenu from ".";

describe("PostMenu component", () => {
  describeWithProps("with post ID", PostMenu, {
    postId: "xxxx-xxxx-xxxx-xxxx",
  });

  it("opens menu when button is clicked", () => {
    const wrapper = shallow(<PostMenu postId="xxxx-xxxx-xxxx-xxxx" />);
    wrapper.find(Button).simulate("click", {
      target: document.createElement("button"),
    });
    const menu = wrapper.find(Menu);
    expect(menu.props().open).toBe(true);
  });

  it("updates state when menu is closed", () => {
    const wrapper = shallow<PostMenu>(<PostMenu postId="xxxx-xxxx-xxxx-xxxx" />);
    const menu = wrapper.find(Menu);
    menu.props().onClose!();
    expect(wrapper.state().anchorElement).toBeNull();
  });
});
