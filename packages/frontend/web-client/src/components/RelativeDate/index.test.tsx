import { shallow } from "enzyme";
import React from "react";

import RelativeDate from ".";

describe("RelativeDate component", () => {
  it("matches snapshot", () => {
    Date.now = () => 1539331728398;
    const wrapper = shallow(
      <RelativeDate value="2018-10-12T07:48:03.948Z" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
