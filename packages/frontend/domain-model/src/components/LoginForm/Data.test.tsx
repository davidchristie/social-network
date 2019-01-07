import { mount, ReactWrapper } from "enzyme";
import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import { AUTHENTICATION_TOKEN } from "../../constants";
import mockLogin from "../../mutations/mockLogin";
import mockAccountResponse from "../../queries/mockAccountResponse";
import { Props as ContentProps } from "./Content";
import Data, { Props } from "./Data";

const TestContent: React.StatelessComponent<ContentProps> = () => null;
const variables = {
  email: "user@email.com",
  password: "password",
};
const mockLoginResponse = mockLogin(variables);
const responses = [
  mockAccountResponse(),
  mockLoginResponse,
];

describe("LoginForm data", () => {
  let wrapper: ReactWrapper<Props>;

  beforeEach(() => {
    wrapper = mount(
      <MockedProvider mocks={responses}>
        <Data content={TestContent} />
      </MockedProvider >
    );
  });

  it("renders the content component", () => {
    expect(wrapper.find(TestContent).exists()).toBe(true);
  });

  describe("when login mutation is performed", () => {
    beforeEach(async () => {
      await wrapper.find(TestContent).first().props().login({
        variables,
      });
    });

    it("stores the authentication token", () => {
      expect(window.localStorage.getItem(AUTHENTICATION_TOKEN))
        .toEqual(mockLoginResponse.result!.data!.login.token);
    });
  });
});
