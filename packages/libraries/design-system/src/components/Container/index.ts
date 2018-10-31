import elementWithClass from "../../utilities/elementWithClass";
import "./index.css";

interface Props extends React.HTMLAttributes<HTMLElement> { }

const Container = elementWithClass<Props>("Container", "div");

export default Container;
