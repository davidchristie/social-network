import { action } from "@storybook/addon-actions";

import Input from ".";
import addComponentStory from "../../utilities/storybook/addComponentStory";

addComponentStory(Input, {
  onBlur: action("onBlur"),
  onChange: action("onChange"),
  onClick: action("onClick"),
});
