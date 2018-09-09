import { shallow, ShallowWrapper } from "enzyme";
import React from "react";

import Container from "./index";

describe("Container component", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Container />);
  });

  it("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
