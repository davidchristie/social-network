import React from "react";
import { itMatchesSnapshot } from "test-utilities";

import HomePage from "./index";

describe("HomePage component", () => {
  itMatchesSnapshot(<HomePage />);
});
