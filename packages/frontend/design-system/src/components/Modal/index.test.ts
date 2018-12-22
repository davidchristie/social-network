import { describeWithProps } from "test-utilities/react";

import Modal from "./index";

describe("Modal component", () => {
  describeWithProps("when closed", Modal, {
    onClose: () => { return; },
    open: false,
  });

  describeWithProps("when open", Modal, {
    onClose: () => { return; },
    open: true,
  });
});
