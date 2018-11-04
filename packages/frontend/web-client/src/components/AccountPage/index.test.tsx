import React from "react";
import { itMatchesSnapshot } from "test-utilities/react";

import AccountPage from "./index";

describe("AccountPage component", () => {
  itMatchesSnapshot(<AccountPage />);
});
