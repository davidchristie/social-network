import React from "react";
import { itMatchesSnapshot } from "test-utilities/dist/react";
import Content from "./Content";

describe("Loading content", () => {
  const props = {
    classes: {
      loading: "loading",
      progress: "progress",
    },
  };
  itMatchesSnapshot(<Content {...props} />);
});
