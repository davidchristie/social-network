import React from "react";
import { itMatchesSnapshot } from "test-utilities/react";
import Topbar from ".";

describe("Topbar component", () => {
  itMatchesSnapshot(<Topbar />);
});
