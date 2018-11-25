import React from "react";
import { create } from "react-test-renderer";
import Page from ".";

const TestComponent = () => {
  return <div className="TestComponent" />;
};
const loadComponent = () => Promise.resolve({
  default: TestComponent,
});

describe("Page component", () => {
  it("renders loading state", () => {
    const root = create(
      <Page load={loadComponent} />
    );
    expect(root).toMatchSnapshot();
  });

  it("renders the component", async () => {
    const root = create(
      <Page load={loadComponent} />
    );
    await loadComponent;
    expect(root).toMatchSnapshot();
  });
});
