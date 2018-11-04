import { shallow } from "enzyme";
import React from "react";

import Avatar from ".";

function describeSize (size: string) {
  describe(size, () => {
    it("matches snapshot", () => {
      const wrapper = shallow(<Avatar size={size} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
}

describe("Avatar component", () => {
  describeSize("small");

  describeSize("large");
});
