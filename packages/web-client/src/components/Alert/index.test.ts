import {
  describeWithCustomClass,
  describeWithNoProps
} from "test-utilities";

import Alert from "./index";

describe("Alert component", () => {
  describeWithNoProps(Alert);

  describeWithCustomClass(Alert);
});
