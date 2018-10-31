import { shallow, ShallowWrapper } from "enzyme";
import React from "react";

import Theme from "./index";

describe("Theme component", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Theme />);
  });

  it("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
