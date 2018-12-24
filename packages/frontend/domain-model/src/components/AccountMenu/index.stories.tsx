import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { Theme } from "design-system";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import AccountMenu from ".";
import apollo from "../../decorators/apollo";

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
stories.add(
  "AccountMenu",
  () => <AccountMenu />
);
