import { shallow, ShallowWrapper } from "enzyme";
import React from "react";

import describeWithNoProps from "../../testings/describeWithNoProps";
import Button from "./index";

describe("Button component", () => {
  let wrapper: ShallowWrapper;

  describeWithNoProps(Button);

  describe("with custom class", () => {
    const CUSTOM_CLASS = "custom_class";

    beforeEach(() => {
      wrapper = shallow(
        <Button className={CUSTOM_CLASS} />,
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
