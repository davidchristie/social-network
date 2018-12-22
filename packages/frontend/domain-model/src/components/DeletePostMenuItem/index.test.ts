import { describeWithProps } from "test-utilities/react";

import DeletePostButton from ".";

describe("DeletePostButton component", () => {
  describeWithProps("with post ID", DeletePostButton, {
    postId: "xxxx-xxxx-xxxx-xxxx",
  });
});
