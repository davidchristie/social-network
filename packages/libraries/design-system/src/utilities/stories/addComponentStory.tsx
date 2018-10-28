import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";

import getDisplayName from "./getDisplayName";

interface Props extends React.HTMLAttributes<HTMLElement> { }

export default function addComponentStory<P extends Props> (Component: React.ComponentType<P>) {
  const stories = storiesOf("Components", module);
  const name = getDisplayName(Component);
  stories.add(
    name,
    withInfo({ inline: true })(() => (
      <Component
        children={name}
        onClick={action("onClick")}
      />
    ))
  );
}
