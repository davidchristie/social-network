import {
  describeWithCustomClass,
  describeWithNoProps
} from "test-utilities/react";

import Container from "./index";

describe("Container component", () => {
  describeWithNoProps(Container);

  describeWithCustomClass(Container);
});
