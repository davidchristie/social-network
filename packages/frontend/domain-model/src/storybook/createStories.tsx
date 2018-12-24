import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { Theme } from "design-system";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import apollo from "./decorators/apollo";

export default function createStories () {
  const stories = storiesOf("Domain Model", module);
  stories.addDecorator(getStory => <MemoryRouter>{getStory()}</MemoryRouter>);
  stories.addDecorator(apollo);
  stories.addDecorator(getStory => <Theme>{getStory()}</Theme>);
  stories.addDecorator(withInfo({
    inline: true,
    propTablesExclude: [
      MemoryRouter,
      Theme,
    ],
  }));
  return stories;
}
