import { shallow } from "enzyme";
import React from "react";
import { routes } from "./constants";

describe.each(routes)("routes", route => {
  describe(route.path, () => {
    it("renders without crashing", async () => {
      const Component = await route.load;
      shallow(<Component />);
    });
  });
});
