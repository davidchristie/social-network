import React from "react";
import { itMatchesSnapshot } from "test-utilities/react";
import Content from "./Content";

describe("AccountPage content", () => {
  itMatchesSnapshot(<Content />);
});
