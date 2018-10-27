import {
  describeWithCustomClass,
  describeWithNoProps
} from "test-utilities";

import TextArea from "./index";

describe("TextArea component", () => {
  describeWithNoProps(TextArea);

  describeWithCustomClass(TextArea);
});
