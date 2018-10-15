import React from "react";

import itMatchesSnapshot from "./itMatchesSnapshot";

export default function describeWithNoProps (
  Component: React.ComponentType
) {
  describe("with no props", () => {
    itMatchesSnapshot(<Component />);
  });
}
