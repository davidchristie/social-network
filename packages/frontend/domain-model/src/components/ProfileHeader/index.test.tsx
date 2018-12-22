import { shallow } from "enzyme";
import React from "react";
import ProfileHeader from ".";

describe("ProfileHeader component", () => {
  it("renders without crashing", () => {
    shallow(<ProfileHeader profileId="xxxx-xxxx-xxxx-xxxx" />);
  });
});
