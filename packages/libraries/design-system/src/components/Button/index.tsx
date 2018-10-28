import React from "react";

import elementWithClass from "../../utilities/elementWithClass";
import "./index.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

export default elementWithClass<Props>("Button", "button");
