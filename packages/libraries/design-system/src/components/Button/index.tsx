import React from "react";

import "./index.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

const Button: React.SFC<Props> = ({ children, className, ...attributes }) => (
  <button
    className={`Button${className ? " " + className : ""}`}
    {...attributes}
  >
    {children}
  </button>
);

export default Button
