import { shallow, ShallowWrapper } from "enzyme";
import React from "react";

interface Props {
  className?: string;
}

export default function describeWithCustomClass (
  Component: React.ComponentType<Props>
) {
  describe("with custom class", () => {
    const CUSTOM_CLASS = "CUSTOM_CLASS";

    let wrapper: ShallowWrapper;

    beforeEach(() => {
      wrapper = shallow(
        <Component className={CUSTOM_CLASS} />,
      );
    });

    it("has custom class", () => {
      expect(wrapper.hasClass(CUSTOM_CLASS)).toBe(true);
    });

    it("matches snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
}
