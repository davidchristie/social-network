import describeWithCustomClass from "../../testing/describeWithCustomClass";
import describeWithNoProps from "../../testing/describeWithNoProps";
import Input from "./index";

describe("Input component", () => {
  describeWithNoProps(Input);

  describeWithCustomClass(Input);
});
