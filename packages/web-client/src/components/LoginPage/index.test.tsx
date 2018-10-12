import { shallow } from "enzyme";
import React from "react";

import LoginPage from ".";

describe("LoginPage component", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
