import React from "react";
import { itMatchesSnapshot } from "test-utilities/dist/react";
import NotFoundPage from ".";

describe("NotFoundPage component", () => {
  itMatchesSnapshot(<NotFoundPage />);
});
