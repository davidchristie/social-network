import {
  describeWithCustomClass,
  describeWithNoProps
} from "test-utilities";

import Input from "./index";

describe("Input component", () => {
  describeWithNoProps(Input);

  describeWithCustomClass(Input);
});
