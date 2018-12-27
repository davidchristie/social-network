import React from "react";
import { itMatchesSnapshot } from "test-utilities/dist/react";
import Routes from ".";

describe("Routes component", () => {
  itMatchesSnapshot(<Routes />);
});
