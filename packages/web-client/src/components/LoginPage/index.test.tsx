import React from "react";

import LoginPage from ".";
import itMatchesSnapshot from "../../testing/itMatchesSnapshot";

describe("LoginPage component", () => {
  itMatchesSnapshot(<LoginPage />);
});
