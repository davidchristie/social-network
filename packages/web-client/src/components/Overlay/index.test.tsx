import { shallow } from "enzyme";
import React from "react";

import Overlay from "./index";

describe("Overlay component", () => {
  describe("with no props", () => {
    it("matches snapshot", () => {
      const wrapper = shallow(<Overlay />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("with big prop", () => {
    it("matches snapshot", () => {
      const wrapper = shallow(<Overlay dark={true} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
