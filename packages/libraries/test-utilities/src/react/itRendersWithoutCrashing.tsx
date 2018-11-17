import { mount } from "enzyme";
import React from "react";
import { MockedProvider } from "react-apollo/test-utils";

export default function itRendersWithoutCrashing (Component: React.ComponentType) {
  it("renders without crashing", () => {
    mount(
      <MockedProvider>
        <Component />
      </MockedProvider>
    );
  });
}
