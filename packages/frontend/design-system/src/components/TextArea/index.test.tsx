import {
  describeWithCustomClass,
  describeWithNoProps
} from "test-utilities/react";
import TextArea from ".";

describe("TextArea component", () => {
  describeWithNoProps(TextArea);

  describeWithCustomClass(TextArea);
});
