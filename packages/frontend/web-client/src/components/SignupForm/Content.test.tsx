import { Alert, Input } from "design-system";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import Content, { Props, State } from "./Content";

const email = "user@email.com";
const errorMessage = "error_message";
const name = "User";
const password = "password";
const preventDefault = jest.fn();
const signup = jest.fn();
const token = "token";

function beforeEachSimulateInputChange (
  getWrapper: () => ShallowWrapper<Props, State>,
  inputName: string,
  newValue: string
) {
  beforeEach(() => {
    getWrapper()
      .findWhere(element => {
        return element.is(Input) && element.props().name === inputName;
      })
      .props()
      .onChange({
        target: {
          value: newValue,
        },
      });
  });
}

describe("SignupForm content", () => {
  let wrapper: ShallowWrapper<Props, State>;

  beforeEach(() => {
    const props = {
      signup,
    };
    wrapper = shallow(<Content {...props} />);
  });

  it("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("on name change", () => {
    beforeEachSimulateInputChange(() => wrapper, "name", name);

    describe("on email change", () => {
      beforeEachSimulateInputChange(() => wrapper, "email", email);

      it("updates component state", () => {
        expect(wrapper.state().email).toEqual(email);
      });

      beforeEachSimulateInputChange(() => wrapper, "password", password);

      describe("on form submit", () => {
        beforeEach(() => {
          signup.mockImplementationOnce(() => ({
            data: {
              signup: {
                token,
              },
            },
          }));
          wrapper.find("form").simulate("submit", {
            preventDefault,
          });
        });

        it("prevents default action", () => {
          expect(preventDefault).toBeCalled();
        });

        it("performs update account mutation", () => {
          expect(signup).toBeCalledWith({
            variables: {
              email,
              name,
              password,
            },
          });
        });
      });

      describe("on update account mutation error", () => {
        beforeEach(() => {
          signup.mockRejectedValueOnce(new Error(errorMessage));
          wrapper.find("form").simulate("submit", {
            preventDefault,
          });
        });

        it("prevents default action", () => {
          expect(preventDefault).toBeCalled();
        });

        it("updates component state", () => {
          expect(wrapper.state().errorMessage).toEqual(errorMessage);
        });

        it("displays error message", () => {
          expect(
            wrapper.containsMatchingElement(<Alert>{errorMessage}</Alert>)
          ).toBe(true);
        });
      });
    });
  });
});
