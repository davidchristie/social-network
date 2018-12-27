import React from "react";
import { itMatchesSnapshot } from "test-utilities/react";
import Content from "./Content";

describe("HomePage content", () => {
  itMatchesSnapshot(<Content />);
});
