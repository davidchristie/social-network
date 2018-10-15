import describeWithCustomClass from "../../testing/describeWithCustomClass";
import describeWithNoProps from "../../testing/describeWithNoProps";
import Button from "./index";

describe("Button component", () => {
  describeWithNoProps(Button);

  describeWithCustomClass(Button);
});
