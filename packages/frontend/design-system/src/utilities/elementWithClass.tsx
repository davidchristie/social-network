import React from "react";

interface Props {
  className?: string;
}

export default function elementWithClass<P extends Props> (
  name: string,
  tag: string,
) {
  const Tag = tag;
  const Component: React.SFC<P> = ({ className, ...attributes }: Props) => (
    <Tag
      className={`${name}${className ? " " + className : ""}`}
      {...attributes}
    />
  );
  Component.displayName = name;
  return Component;
}
