import React from "react";
import { itMatchesSnapshot } from "test-utilities/react";

import LoginPage from ".";

describe("LoginPage component", () => {
  itMatchesSnapshot(<LoginPage />);
});
