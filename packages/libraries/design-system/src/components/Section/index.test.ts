import {
  describeWithCustomClass,
  describeWithNoProps
} from "test-utilities/react";

import Section from "./index";

describe("Section component", () => {
  describeWithNoProps(Section);

  describeWithCustomClass(Section);
});
