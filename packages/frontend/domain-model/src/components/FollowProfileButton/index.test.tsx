import { mount } from "enzyme";
import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import FollowProfileButton from ".";

describe("FollowProfileButton component", () => {
  it("renders without crashing", () => {
    mount(
      <MockedProvider>
        <FollowProfileButton profileId="profile_id" />
      </MockedProvider>
    );
  });
});
