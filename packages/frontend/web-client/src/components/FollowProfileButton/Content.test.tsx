import { Button } from "design-system";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import Content, { Props } from "./Content";

describe("Content component", () => {
  const profileId = "profile_id";
  const followProfile = jest.fn();
  const unfollowProfile = jest.fn();

  let wrapper: ShallowWrapper;

  describe("when not following the profile", () => {
    beforeEach(() => {
      const props: Props = {
        account: {
          profile: {
            following: [],
          },
        },
        followProfile,
        profileId,
        unfollowProfile,
      };
      wrapper = shallow(<Content {...props} />);
    });

    it(`renders "Follow" button`, () => {
      const button = wrapper.find(Button);
      expect(button.props().children).toEqual("Follow");
    });

    it("matches snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });

    describe("on click", () => {
      beforeEach(() => {
        wrapper.find(Button).simulate("click");
      });

      it(`performs "followProfile" mutation`, () => {
        expect(followProfile).toBeCalled();
      });
    });
  });

  describe("when following the profile", () => {
    beforeEach(() => {
      const props: Props = {
        account: {
          profile: {
            following: [
              {
                id: profileId,
              },
            ],
          },
        },
        followProfile,
        profileId,
        unfollowProfile,
      };
      wrapper = shallow(<Content {...props} />);
    });

    it(`renders "Unfollow" button`, () => {
      const button = wrapper.find(Button);
      expect(button.props().children).toEqual("Unfollow");
    });

    it("matches snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });

    describe("on click", () => {
      beforeEach(() => {
        wrapper.find(Button).simulate("click");
      });

      it(`performs "unfollowProfile" mutation`, () => {
        expect(unfollowProfile).toBeCalled();
      });
    });
  });
});
