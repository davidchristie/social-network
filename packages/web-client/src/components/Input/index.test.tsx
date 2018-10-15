import { shallow, ShallowWrapper } from "enzyme";
import React from "react";

import describeWithNoProps from "../../testings/describeWithNoProps";
import Input from "./index";

describe("Input component", () => {
  let wrapper: ShallowWrapper;

  describeWithNoProps(Input);

  describe("with custom class", () => {
    const CUSTOM_CLASS = "custom_class";

    beforeEach(() => {
      wrapper = shallow(
        <Input className={CUSTOM_CLASS} />,
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
