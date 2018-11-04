import {
  describeWithCustomClass,
  describeWithNoProps,
  describeWithProps
} from "test-utilities/react";

import Button from "./index";

describe("Button component", () => {
  describeWithNoProps(Button);

  describeWithCustomClass(Button);

  describeWithProps("with text content", Button, {
    children: "text content",
  });
});
