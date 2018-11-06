import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";

import Icon from ".";
import Theme from "../Theme";

const stories = storiesOf("Components", module);
stories.addDecorator(getStory => <Theme>{getStory()}</Theme>);
stories.addDecorator(withInfo({
  inline: true,
  propTablesExclude: [Theme],
}));
stories.add(
  "Icon",
  () => <Icon size="large" variant="primary">account_circle</Icon>
);
