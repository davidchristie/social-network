import React from "react";
import { itRendersWithoutCrashing } from "test-utilities/react";
import Loading from ".";

describe("Loading component", () => {
  itRendersWithoutCrashing(<Loading />);
});
