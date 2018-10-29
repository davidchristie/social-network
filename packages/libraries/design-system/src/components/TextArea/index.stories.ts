import { action } from "@storybook/addon-actions";

import TextArea from ".";
import addComponentStory from "../../utilities/storybook/addComponentStory";

addComponentStory(TextArea, {
  onBlur: action("onBlur"),
  onChange: action("onChange"),
  onClick: action("onClick"),
});
