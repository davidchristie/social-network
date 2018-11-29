import { mount, ReactWrapper } from "enzyme";
import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import { Props as ContentProps } from "./Content";
import Data, { Props } from "./Data";

const TestContent: React.StatelessComponent<ContentProps> = () => null;

describe("SignupForm data", () => {
  let wrapper: ReactWrapper<Props>;

  beforeEach(() => {
    wrapper = mount(
      <MockedProvider>
        <Data content={TestContent} />
      </MockedProvider >
    );
  });

  it("renders the content component", () => {
    expect(wrapper.find(TestContent).exists()).toBe(true);
  });
});
