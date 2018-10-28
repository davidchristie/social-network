import {
  describeWithCustomClass,
  describeWithNoProps
} from "test-utilities";

import Section from "./index";

describe("Section component", () => {
  describeWithNoProps(Section);

  describeWithCustomClass(Section);
});
