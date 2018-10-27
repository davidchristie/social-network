import {
  describeWithCustomClass,
  describeWithNoProps
} from "test-utilities";

import Button from "./index";

describe("Button component", () => {
  describeWithNoProps(Button);

  describeWithCustomClass(Button);
});
