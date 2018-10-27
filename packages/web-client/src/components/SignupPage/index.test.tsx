import React from "react";
import { itMatchesSnapshot } from "test-utilities";

import SignupPage from "./index";

describe("SignupPage component", () => {
  itMatchesSnapshot(<SignupPage />);
});
