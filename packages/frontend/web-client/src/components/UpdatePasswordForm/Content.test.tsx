import { Input } from "design-system";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import Content, { Props, State } from "./Content";

describe("Content component", () => {
  const updatePassword = jest.fn();

  let wrapper: ShallowWrapper<Props, State, Content>;

  it("matches snapshot", () => {
    const props = {
      updatePassword,
    };
    wrapper = shallow(<Content {...props} />);
  });

  describe("on current password change", () => {
    const currentPassword = "current_password";

    beforeEach(() => {
      const props = {
        updatePassword,
      };
      wrapper = shallow(<Content {...props} />);
      wrapper
        .findWhere(element => {
          return element.is(Input) && element.props().name === "current";
        })
        .props()
        .onChange({
          target: {
            value: currentPassword,
          },
        });
    });

    it("updates state", () => {
      expect(wrapper.state().currentPassword).toEqual(currentPassword);
    });

    describe("on new password change", () => {
      const newPassword = "new_password";

      beforeEach(() => {
        wrapper
          .findWhere(element => {
            return element.is(Input) && element.props().name === "new";
          })
          .props()
          .onChange({
            target: {
              value: newPassword,
            },
          });
      });

      it("updates state", () => {
        expect(wrapper.state().newPassword).toEqual(newPassword);
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
          expect(updatePassword).toBeCalledWith({
            variables: {
              data: {
                currentPassword,
                newPassword,
              },
            },
          });
        });
      });

      describe("on update password error", () => {
        const errorMessage = "error_message";
        const preventDefault = jest.fn();

        beforeEach(() => {
          updatePassword.mockRejectedValue(new Error(errorMessage));
          wrapper.find("form").simulate("submit", {
            preventDefault,
          });
        });

        it("prevents default action", () => {
          expect(preventDefault).toBeCalled();
        });

        it("updates state", () => {
          expect(wrapper.state().errorMessage).toEqual(errorMessage);
        });
      });
    });
  });
});
