import { Alert, Input } from "design-system";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import Content, { Props, State } from "./Content";

describe("UpdateAccountForm content", () => {
  const account = {
    email: "user@email.com",
  };
  const updateAccount = jest.fn();

  let wrapper: ShallowWrapper<Props, State, Content>;

  beforeEach(() => {
    const props = {
      account,
      updateAccount,
    };
    wrapper = shallow(<Content {...props} />);
  });

  it("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("on email change", () => {
    const newEmail = "new_user@email.com";

    beforeEach(() => {
      wrapper
        .findWhere(element => {
          return element.is(Input) && element.props().name === "email";
        })
        .props()
        .onChange({
          target: {
            value: newEmail,
          },
        });
    });

    it("updates component state", () => {
      expect(wrapper.state().email).toEqual(newEmail);
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

      it("performs update account mutation", () => {
        expect(updateAccount).toBeCalledWith({
          variables: {
            data: {
              email: newEmail,
            },
          },
        });
      });
    });

    describe("on update account mutation error", () => {
      const errorMessage = "error_message";
      const preventDefault = jest.fn();

      beforeEach(() => {
        updateAccount.mockImplementationOnce(() => ({
          errors: [new Error(errorMessage)],
        }));
        wrapper.find("form").simulate("submit", {
          preventDefault,
        });
      });

      it("prevents default action", () => {
        expect(preventDefault).toBeCalled();
      });

      it("updates component state", () => {
        expect(wrapper.state().errorMessages).toEqual([errorMessage]);
      });

      it("displays error message", () => {
        expect(
          wrapper.containsMatchingElement(<Alert>{errorMessage}</Alert>)
        ).toBe(true);
      });
    });
  });
});
