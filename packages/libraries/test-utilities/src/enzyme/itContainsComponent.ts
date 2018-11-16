import React from "react";
import { Wrapper } from "./types";

export default function itContainsComponent (
  name: string,
  getWrapper: () => Wrapper,
  Component: React.ComponentType
) {
  it(name, () => {
    expect(getWrapper().find(Component).exists()).toBe(true);
  });
}
