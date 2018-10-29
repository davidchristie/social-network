import { describeWithProps } from "test-utilities/react";

import Modal from "./index";

describe("Modal component", () => {
  describeWithProps("when closed", Modal, { open: false });

  describeWithProps("when open", Modal, { open: true });
});
