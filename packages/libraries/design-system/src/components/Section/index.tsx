import React from "react";

import "./index.css";

interface Props extends React.HTMLAttributes<HTMLElement> { }

const Section: React.SFC<Props> = ({ className, ...attributes }) => (
  <section
    className={`Section${className ? " " + className : ""}`}
    {...attributes}
  />
);

export default Section;
