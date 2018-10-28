import React from "react";

import elementWithClass from "../../utilities/elementWithClass";
import "./index.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

const Button = elementWithClass<Props>("Button", "button");

export default Button;
