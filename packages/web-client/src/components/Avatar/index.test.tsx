import { shallow, ShallowWrapper } from "enzyme";
import React from "react";

import Avatar from "./index";

describe("Avatar component", () => {
  let wrapper: ShallowWrapper;

  describe("large", () => {
    beforeEach(() => {
      wrapper = shallow(<Avatar size="large" />);
    });

    it("matches snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("small", () => {
    beforeEach(() => {
      wrapper = shallow(<Avatar size="small" />);
    });

    it("matches snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
