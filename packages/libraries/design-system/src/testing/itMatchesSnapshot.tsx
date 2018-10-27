import { shallow } from "enzyme";
import React from "react";

export default function isMatchesSnapshot (
  element: React.ReactElement<{}>
) {
  it("matches snapshot", () => {
    const wrapper = shallow(element);
    expect(wrapper).toMatchSnapshot();
  });
}
