import React from "react";
import { itMatchesSnapshot } from "test-utilities/dist/react";
import DomainModelProvider from ".";

describe("DomainModelProvider component", () => {
  itMatchesSnapshot(<DomainModelProvider />);
});
