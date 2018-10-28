import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";

import Section from ".";

const stories = storiesOf("Components", module);

stories.add(
  "Section",
  withInfo({ inline: true })(() => <Section
    children="Section"
    onClick={action("onClick")}
  />)
);
