import { Avatar } from "design-system";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import { describeWithProps } from "test-utilities/react";
import Dropdown from "../Dropdown";
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
      wrapper.find(Avatar).simulate("click");
    });

    it("opens dropdown", () => {
      const dropdown = wrapper.find(Dropdown);
      expect(dropdown.props().open).toBe(true);
    });

    describe("when dropdown is closed", () => {
      beforeEach(() => {
        const dropdown = wrapper.find(Dropdown);
        dropdown.props().onClose!();
      });

      it("updates state", () => {
        expect(wrapper.state().isDropdownOpen).toBe(false);
      });
    });
  });
});
