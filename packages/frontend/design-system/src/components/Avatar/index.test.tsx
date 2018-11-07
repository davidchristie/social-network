import React from "react";
import { describeMountedElement } from "test-utilities/react";

import Avatar from ".";

describe("Avatar component", () => {
  describeMountedElement("with no props", <Avatar />);

  describeMountedElement(`with size "small"`, <Avatar size="small" />);

  describeMountedElement(`with size "large"`, <Avatar size="large" />);
});
