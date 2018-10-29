import React from "react";
import { itMatchesSnapshot } from "test-utilities/react";

import HomePage from "./index";

describe("HomePage component", () => {
  itMatchesSnapshot(<HomePage />);
});
