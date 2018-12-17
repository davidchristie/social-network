import React from "react";
import { itMatchesSnapshot } from "test-utilities/dist/react";
import Header from ".";

describe("Header component", () => {
  itMatchesSnapshot(<Header />);
});
