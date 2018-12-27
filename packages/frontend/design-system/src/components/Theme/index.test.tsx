import React from "react";
import { itRendersWithoutCrashing } from "test-utilities/react";
import Theme from ".";

describe("Theme component", () => {
  itRendersWithoutCrashing(<Theme />);
});
