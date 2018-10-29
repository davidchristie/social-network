import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";

import getDisplayName from "./getDisplayName";

interface Props extends React.HTMLAttributes<HTMLElement> { }

export default function addComponentStory<P extends Props> (
  Component: React.ComponentType<P>,
  props?: P
) {
  const stories = storiesOf("Components", module);
  const name = getDisplayName(Component);
  const componentProps = props || {
    children: name,
    onClick: action("onClick"),
  };
  stories.add(
    name,
    withInfo({ inline: true })(() => (
      <Component {...componentProps} />
    ))
  );
}
