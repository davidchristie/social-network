import { shallow } from "enzyme";
import React from "react";

export default function describeWithNoProps (
  Component: React.ComponentType
) {
  describe("with no props", () => {
    it("matches snapshot", () => {
      const wrapper = shallow(<Component />);
      expect(wrapper).toMatchSnapshot();
    });
  });
}
