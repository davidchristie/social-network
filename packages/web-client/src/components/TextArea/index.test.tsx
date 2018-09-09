import { shallow, ShallowWrapper } from "enzyme";
import React from "react";

import TextArea from "./index";

describe("TextArea component", () => {
  let wrapper: ShallowWrapper;

  describe("with no props", () => {
    beforeEach(() => {
      wrapper = shallow(<TextArea />);
    });

    it("matches snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("with custom class", () => {
    const CUSTOM_CLASS = "custom_class";

    beforeEach(() => {
      wrapper = shallow(
        <TextArea className={CUSTOM_CLASS} />,
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
