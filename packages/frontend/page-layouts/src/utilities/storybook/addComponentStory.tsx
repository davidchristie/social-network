import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { Theme } from "design-system";
import React from "react";
import getDisplayName from "./getDisplayName";

export default function addComponentStory<P> (
  Component: React.ComponentType<P>,
  props?: P
) {
  const stories = storiesOf("Design System", module);
  const name = getDisplayName(Component);
  const componentProps: any = props || {
    children: name,
    onClick: action("onClick"),
  };
  stories.addDecorator(getStory => <Theme>{getStory()}</Theme>);
  stories.addDecorator(withInfo({
    inline: true,
    propTablesExclude: [Theme],
  }));
  stories.add(
    name,
    () => <Component {...componentProps} />
  );
}
