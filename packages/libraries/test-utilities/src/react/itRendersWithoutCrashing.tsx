import React from "react";
import TestRenderer from "react-test-renderer";

export default function itRendersWithoutCrashing (
  element: React.ReactElement<any>
) {
  it("renders without crashing", () => {
    TestRenderer.create(element);
  });
}
