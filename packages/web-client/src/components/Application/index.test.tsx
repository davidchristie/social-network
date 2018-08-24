import React from "react";
import ReactDOM from "react-dom";

import Application from ".";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Application />, div);
  ReactDOM.unmountComponentAtNode(div);
});
