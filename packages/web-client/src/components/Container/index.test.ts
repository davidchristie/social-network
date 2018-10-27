import {
  describeWithCustomClass,
  describeWithNoProps
} from "test-utilities";

import Container from "./index";

describe("Container component", () => {
  describeWithNoProps(Container);

  describeWithCustomClass(Container);
});
