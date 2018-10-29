import {
  describeWithCustomClass,
  describeWithNoProps
} from "test-utilities/react";

import Alert from "./index";

describe("Alert component", () => {
  describeWithNoProps(Alert);

  describeWithCustomClass(Alert);
});
