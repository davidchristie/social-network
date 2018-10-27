import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";

import Button from ".";

const stories = storiesOf("Components", module);

stories.add(
  "Button",
  withInfo({ inline: true })(() => <Button
    children="Button"
    onClick={action("onClick")}
  />)
);
