import React from "react";
import { itMatchesSnapshot } from "test-utilities";

import AccountPage from "./index";

describe("AccountPage component", () => {
  itMatchesSnapshot(<AccountPage />);
});
