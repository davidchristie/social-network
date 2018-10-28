import React from "react";

import elementWithClass from "../../utilities/elementWithClass";
import "./index.css";

interface Props extends React.HTMLAttributes<HTMLElement> { }

export default elementWithClass<Props>("Section", "section");
