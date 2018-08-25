import { shallow, ShallowWrapper } from "enzyme";
import React from "react";

import Alert from "./index";

describe("Alert component", () => {
  let wrapper: ShallowWrapper;

  describe("with no props", () => {
    beforeEach(() => {
      wrapper = shallow(<Alert />);
    });

    it("matches snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("with custom class", () => {
    const CUSTOM_CLASS = "custom_class";

    beforeEach(() => {
      wrapper = shallow(
        <Alert className={CUSTOM_CLASS} />,
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
