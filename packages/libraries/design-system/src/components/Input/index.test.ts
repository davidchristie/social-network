import {
  describeWithCustomClass,
  describeWithNoProps
} from "test-utilities/react";

import Input from "./index";

describe("Input component", () => {
  describeWithNoProps(Input);

  describeWithCustomClass(Input);
});
