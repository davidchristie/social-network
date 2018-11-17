import { Avatar, Menu } from "design-system";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import { describeWithProps } from "test-utilities/react";
import Content, { Props, State } from "./Content";

const propsWithoutAvatar: Props = {
  account: {
    profile: {
      avatar: null,
      id: "profile_id",
    },
  },
};
const propsWithAvatar: Props = {
  account: {
    profile: {
      avatar: {
        url: "https://avatar_url.com",
      },
      id: "profile_id",
    },
  },
};

describe("Content component", () => {
  describeWithProps(
    "renders profile with avatar",
    Content,
    propsWithAvatar
  );

  describeWithProps(
    "renders profile without avatar",
    Content,
    propsWithoutAvatar
  );

  describe("when avatar is clicked", () => {
    let wrapper: ShallowWrapper<{}, State>;

    beforeEach(() => {
      const props = {
        account: {
          __typename: "Account",
          email: "account@email.com",
          id: "account_id",
          name: "Account",
          profile: {
            __typename: "Profile",
            avatar: null,
            id: "profile_id",
            name: "Profile",
          },
        },
      };
      wrapper = shallow(<Content {...props} />);
      wrapper.find(Avatar).simulate("click", {
        currentTarget: wrapper.find(Avatar).first().getElement(),
      });
    });

    it("opens menu", () => {
      const menu = wrapper.find(Menu);
      expect(menu.props().anchorElement).not.toBeNull();
    });

    describe("when menu is closed", () => {
      beforeEach(() => {
        const menu = wrapper.find(Menu);
        menu.props().onClose!();
      });

      it("updates state", () => {
        expect(wrapper.state().anchorElement).toBe(null);
      });
    });
  });
});
