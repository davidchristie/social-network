import { shallow } from "enzyme";
import React from "react";
import ProfilePage from ".";

describe("ProfilePage component", () => {
  it("renders without crashing", () => {
    shallow(<ProfilePage />);
  });
});
