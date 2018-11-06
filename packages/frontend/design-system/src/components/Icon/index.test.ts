import { describeWithProps } from "test-utilities/react";

import Icon from ".";

describe("Icon component", () => {
  describeWithProps("with default props", Icon, {
    children: "account_circle",
  });

  describeWithProps(`with variant "primary"`, Icon, {
    children: "account_circle",
    variant: "primary",
  });

  describeWithProps(`with size "large"`, Icon, {
    children: "account_circle",
    size: "large",
  });
});
