import React from "react";

import itMatchesSnapshot from "./itMatchesSnapshot";

export default function describeWithProps<P> (
  name: string,
  Component: React.ComponentType<P>,
  props: P
) {
  describe(name, () => {
    itMatchesSnapshot(<Component {...props} />);
  });
}
