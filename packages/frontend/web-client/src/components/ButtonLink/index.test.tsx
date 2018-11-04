import { shallow, ShallowWrapper } from "enzyme";
import React from "react";

import ButtonLink from "./index";

describe("ButtonLink component", () => {
  const TO = "/test-route";

  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <ButtonLink to={TO} />,
    );
  });

  it("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("with custom class", () => {
    const CUSTOM_CLASS = "custom_class";

    beforeEach(() => {
      wrapper = shallow(
        <ButtonLink className={CUSTOM_CLASS} to={TO} />,
      );
    });

    it("has custom class", () => {
      expect(wrapper.hasClass(CUSTOM_CLASS)).toBe(true);
    });

    it("matches snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
