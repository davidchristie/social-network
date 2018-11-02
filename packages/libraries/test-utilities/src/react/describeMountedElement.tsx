import { mount } from "enzyme";
import React from "react";

export default function describeMountedElement (
  name: string,
  element: React.ReactElement<any>
) {
  describe(name, () => {
    it("renders without errors", () => {
      mount(element);
    });

    it("matches shapshot", () => {
      const wrapper = mount(element);
      expect(wrapper).toMatchSnapshot();
    });
  });
}
