import { describeWithProps } from "test-utilities/react";

import Menu from "./index";

describe("Menu component", () => {
  describeWithProps("when closed", Menu, {
    open: false,
  });
});
