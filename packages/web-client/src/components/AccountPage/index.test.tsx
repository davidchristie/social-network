import React from "react";

import itMatchesSnapshot from "../../testing/itMatchesSnapshot";
import AccountPage from "./index";

describe("AccountPage component", () => {
  itMatchesSnapshot(<AccountPage />);
});
