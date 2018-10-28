import React from "react";

import elementWithClass from "../../utilities/elementWithClass";
import "./index.css";

interface Props extends React.HTMLAttributes<HTMLElement> { }

const Section = elementWithClass<Props>("Section", "section");

export default Section;
