import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";

import Theme from "../../components/Theme";
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
  stories.addDecorator(getStory => <Theme>{getStory()}</Theme>);
  stories.add(
    name,
    () => <Component {...componentProps} />
  );
}
