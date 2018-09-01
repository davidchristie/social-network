import { shallow } from "enzyme";
import React from "react";

import HomePage from "./index";

describe("HomePage component", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper).toMatchSnapshot();
  });
});
