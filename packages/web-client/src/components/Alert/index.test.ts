import describeWithCustomClass from "../../testing/describeWithCustomClass";
import describeWithNoProps from "../../testing/describeWithNoProps";
import Alert from "./index";

describe("Alert component", () => {
  describeWithNoProps(Alert);

  describeWithCustomClass(Alert);
});
