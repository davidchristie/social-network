import React from "react";

import "./index.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

const Button: React.SFC<Props> = ({ className, ...attributes }) => (
  <button
    className={`Button${className ? " " + className : ""}`}
    {...attributes}
  />
);

export default Button
