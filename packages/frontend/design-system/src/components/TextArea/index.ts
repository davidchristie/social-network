import React from "react";

import elementWithClass from "../../utilities/elementWithClass";
import "./index.css";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { }

const TextArea = elementWithClass<Props>("TextArea", "textarea");

export default TextArea;
