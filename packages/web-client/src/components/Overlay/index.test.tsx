import { shallow } from "enzyme";
import React from "react";
import { describeWithNoProps } from "test-utilities";

import Overlay from "./index";

describe("Overlay component", () => {
  describeWithNoProps(Overlay);

  describe("with big prop", () => {
    it("matches snapshot", () => {
      const wrapper = shallow(<Overlay dark={true} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
