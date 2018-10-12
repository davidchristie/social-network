import { shallow } from "enzyme";
import React from "react";

import SignupPage from ".";

describe("SignupPage component", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<SignupPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
