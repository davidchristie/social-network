import React from "react";
import "./index.css";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}
export default class Button extends React.Component<Props> {
    render(): JSX.Element;
}
export {};
