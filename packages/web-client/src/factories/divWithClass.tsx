import React from "react";

interface Props extends React.HTMLAttributes<HTMLElement> { }

export default function divWithClass (displayName: string) {
  const DivWithClass = (props: Props) => {
    const { children, className, ...attributes } = props;
    const classes = [displayName];
    if (className) {
      classes.push(className);
    }
    return (
      <div
        className={classes.join(" ")}
        {...attributes}
      >
        {children}
      </div>
    );
  };
  DivWithClass.displayName = displayName;
  return DivWithClass;
}
