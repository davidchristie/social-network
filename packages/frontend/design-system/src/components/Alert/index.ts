import elementWithClass from "../../utilities/elementWithClass";
import "./index.css";

interface Props extends React.HTMLAttributes<HTMLElement> { }

const Alert = elementWithClass<Props>("Alert", "div");

export default Alert;
