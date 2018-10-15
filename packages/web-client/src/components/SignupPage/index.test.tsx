import React from "react";

import itMatchesSnapshot from "../../testing/itMatchesSnapshot";
import SignupPage from "./index";

describe("SignupPage component", () => {
  itMatchesSnapshot(<SignupPage />);
});
