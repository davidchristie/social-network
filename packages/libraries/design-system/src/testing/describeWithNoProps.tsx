import React from "react";

import describeWithProps from "./describeWithProps";

export default function describeWithNoProps (
  Component: React.ComponentType
) {
  describeWithProps("with no props", Component, {});
}
