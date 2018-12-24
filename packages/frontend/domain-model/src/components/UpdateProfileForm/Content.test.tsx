import { Input } from "design-system";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import { MutationFn } from "react-apollo";
import { describeWithProps } from "test-utilities/react";
import { UpdateProfile, UpdateProfileVariables } from "../../generated/types";
import Content, { Props, State } from "./Content";

const accountWithProfileAvatar = {
  profile: {
    avatar: {
      url: "https://avatar_url.com",
    },
    name: "Profile",
  },
};
const accountWithoutProfileAvatar = {
  profile: {
    avatar: null,
    name: "Profile",
  },
};

describe("Content component", () => {
  const updateProfile = jest.fn() as MutationFn<UpdateProfile, UpdateProfileVariables>;

  describeWithProps<Props>("with avatar", Content, {
    account: accountWithProfileAvatar,
    updateProfile,
  });

  describeWithProps<Props>("without avatar", Content, {
    account: accountWithoutProfileAvatar,
    updateProfile,
  });

  describe("on name change", () => {
    const newName = "new_name";

    let wrapper: ShallowWrapper<Props, State, Content>;

    beforeEach(() => {
      const props = {
        account: accountWithProfileAvatar,
        updateProfile,
      };
      wrapper = shallow(<Content {...props} />);
      wrapper
        .findWhere(element => {
          return element.is(Input) && element.props().name === "name";
        })
        .props()
        .onChange({
          target: {
            value: newName,
          },
        });
    });

    it("updates state", () => {
      expect(wrapper.state().name).toEqual(newName);
    });

    describe("on avatar URL change", () => {
      const newAvatarUrl = "https://new_avatar_url.com";

      beforeEach(() => {
        wrapper
          .findWhere(element => {
            return element.is(Input) && element.props().name === "avatar-url";
          })
          .props()
          .onChange({
            target: {
              value: newAvatarUrl,
            },
          });
      });

      it("updates state", () => {
        expect(wrapper.state().avatarUrl).toEqual(newAvatarUrl);
      });

      describe("on form submit", () => {
        const preventDefault = jest.fn();

        beforeEach(() => {
          wrapper.find("form").simulate("submit", {
            preventDefault,
          });
        });

        it("prevents default action", () => {
          expect(preventDefault).toBeCalled();
        });

        it("updates the profile", () => {
          expect(updateProfile).toBeCalledWith({
            variables: {
              data: {
                avatarUrl: newAvatarUrl,
                name: newName,
              },
            },
          });
        });

        describe("with empty avatar URL", () => {
          beforeEach(() => {
            wrapper.setState({
              avatarUrl: "",
            });
            wrapper.find("form").simulate("submit", {
              preventDefault,
            });
          });

          it("removes the profile avatar", () => {
            expect(updateProfile).toBeCalledWith({
              variables: {
                data: {
                  avatarUrl: null,
                  name: newName,
                },
              },
            });
          });
        });
      });
    });
  });
});
