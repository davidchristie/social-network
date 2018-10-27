import React from "react";
import { itMatchesSnapshot } from "test-utilities";

import LoginPage from ".";

describe("LoginPage component", () => {
  itMatchesSnapshot(<LoginPage />);
});
