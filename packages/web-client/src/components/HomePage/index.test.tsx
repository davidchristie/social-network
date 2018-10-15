import React from "react";

import itMatchesSnapshot from "../../testing/itMatchesSnapshot";
import HomePage from "./index";

describe("HomePage component", () => {
  itMatchesSnapshot(<HomePage />);
});
