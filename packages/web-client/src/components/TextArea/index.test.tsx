import {
  describeWithCustomClass,
  describeWithNoProps
} from "test-utilities/react";

import TextArea from "./index";

describe("TextArea component", () => {
  describeWithNoProps(TextArea);

  describeWithCustomClass(TextArea);
});
