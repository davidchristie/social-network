import { shallow } from "enzyme";
import React from "react";

import AccountPage from "./index";

describe("AccountPage component", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<AccountPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
