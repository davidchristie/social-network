import "design-system";
import React from "react";
import ReactDOM from "react-dom";

import Application from "./components/Application";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Application />, document.getElementById("root"));
registerServiceWorker();
