import { describeWithProps } from "test-utilities/react";

import Input from "./index";

describe("Input component", () => {
  describeWithProps("with label and name", Input, {
    id: "id",
    label: "Label",
    name: "name",
  });
});
