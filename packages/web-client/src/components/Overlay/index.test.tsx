import { shallow } from "enzyme";
import React from "react";

import Overlay from "./index";

describe("Overlay component", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<Overlay />);
    expect(wrapper).toMatchSnapshot();
  });
});
