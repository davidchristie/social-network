import { describeWithProps } from "test-utilities/react";

import Input from "./index";

describe("Input component", () => {
  describeWithProps("with label and name", Input, {
    label: "Label",
    name: "name",
  });
});
