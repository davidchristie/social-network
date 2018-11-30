import classNames from "classnames";
import React from "react";

interface Props {
  className?: string;
}

export default function elementWithClass<P extends Props> (
  name: string,
  tag: string,
) {
  const Tag = tag;
  const Component: React.StatelessComponent<P> = ({ className, ...attributes }: Props) => {
    const props: any = {
      className: classNames(name, className),
      ...attributes,
    };
    return <Tag {...props} />;
  };
  Component.displayName = name;
  return Component;
}
