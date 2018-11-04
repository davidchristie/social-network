import { describeWithProps } from "test-utilities/react";

import Avatar from ".";

function describeSize (size: string) {
  describeWithProps(size, Avatar, { size });
}

describe("Avatar component", () => {
  describeSize("small");

  describeSize("large");
});
