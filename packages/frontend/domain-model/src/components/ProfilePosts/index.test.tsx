import { mount } from "enzyme";
import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import ProfilePosts from ".";

describe("ProfilePosts component", () => {
  it("renders without crashing", () => {
    mount(
      <MockedProvider>
        <ProfilePosts profileId="profile_id" />
      </MockedProvider>
    );
  });
});
