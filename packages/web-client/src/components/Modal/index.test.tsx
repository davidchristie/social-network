import React from "react";

import itMatchesSnapshot from "../../testing/itMatchesSnapshot";
import Modal from "./index";

describe("Modal component", () => {
  describe("when closed", () => {
    itMatchesSnapshot(<Modal onClose={() => { return; }} open={false} />);
  });
});
