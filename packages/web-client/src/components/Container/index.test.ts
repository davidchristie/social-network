import describeWithCustomClass from "../../testing/describeWithCustomClass";
import describeWithNoProps from "../../testing/describeWithNoProps";
import Container from "./index";

describe("Container component", () => {
  describeWithNoProps(Container);

  describeWithCustomClass(Container);
});
