import { Avatar, Menu, MenuItem } from "design-system";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import { describeWithProps } from "test-utilities/react";
import { AUTHENTICATION_TOKEN } from "../../constants";
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

    describe("when logout is clicked", () => {
      beforeEach(() => {
        window.localStorage.setItem(AUTHENTICATION_TOKEN, "test_token");
        Object.defineProperty(window.location, "reload", {
          configurable: true,
        });
        window.location.reload = jest.fn();
        wrapper
          .find(MenuItem)
          .at(2)
          .simulate("click");
      });

      it("removes authentication token from local storage", () => {
        expect(window.localStorage.getItem(AUTHENTICATION_TOKEN)).toBeNull();
      });

      it("reloads the page", () => {
        expect(window.location.reload).toHaveBeenCalledTimes(1);
      });
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
