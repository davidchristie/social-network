import { Alert, Input } from "design-system";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import { AUTHENTICATION_TOKEN } from "../../constants";
import Content, { Props, State } from "./Content";

const email = "user@email.com";
const errorMessage = "error_message";
const name = "User";
const password = "password";
const preventDefault = jest.fn();
const signup = jest.fn();
const token = "token";

describe("SignupForm content", () => {
  let wrapper: ShallowWrapper<Props, State, Content>;

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
    beforeEach(() => {
      wrapper
        .findWhere(element => {
          return element.is(Input) && element.props().name === "name";
        })
        .props()
        .onChange({
          target: {
            value: name,
          },
        });
    });

    describe("on email change", () => {
      beforeEach(() => {
        wrapper
          .findWhere(element => {
            return element.is(Input) && element.props().name === "email";
          })
          .props()
          .onChange({
            target: {
              value: email,
            },
          });
      });

      it("updates component state", () => {
        expect(wrapper.state().email).toEqual(email);
      });

      describe("on password change", () => {
        beforeEach(() => {
          wrapper
            .findWhere(element => {
              return element.is(Input) && element.props().name === "password";
            })
            .props()
            .onChange({
              target: {
                value: password,
              },
            });
        });

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

          it("stores the authentication token", () => {
            expect(window.localStorage.getItem(AUTHENTICATION_TOKEN)).toEqual(token);
          });
        });

        it("runs without crashing if mutation doesn't return any data", () => {
          wrapper.find("form").simulate("submit", {
            preventDefault: jest.fn(),
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
});
