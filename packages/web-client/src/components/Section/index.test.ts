import describeWithCustomClass from "../../testing/describeWithCustomClass";
import describeWithNoProps from "../../testing/describeWithNoProps";
import Section from "./index";

describe("Section component", () => {
  describeWithNoProps(Section);

  describeWithCustomClass(Section);
});
