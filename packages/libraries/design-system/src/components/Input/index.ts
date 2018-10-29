import React from "react";

import elementWithClass from "../../utilities/elementWithClass";
import "./index.css";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = elementWithClass<Props>("Input", "input");

export default Input;
