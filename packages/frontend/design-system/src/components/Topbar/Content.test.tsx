import React from "react";
import { itMatchesSnapshot } from "test-utilities/dist/react";
import Content from "./Content";

describe("Topbar component", () => {
  const props = {
    classes: {
      topbar: "topbar",
    },
  };
  itMatchesSnapshot(<Content {...props} />);
});
