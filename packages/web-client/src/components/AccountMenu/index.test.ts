import describeWithNoProps from "../../testing/describeWithNoProps";
import describeWithProps from "../../testing/describeWithProps";
import AccountMenu, { AccountMenuContent } from "./index";

describe("AccountMenu component", () => {
  describeWithNoProps(AccountMenu);
});

describe("AccountMenuContent component", () => {
  describeWithProps(
    "renders loading state",
    AccountMenuContent,
    {
      loading: true,
    }
  );
});
