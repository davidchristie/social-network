import { action } from "@storybook/addon-actions";
import TextArea from ".";
import addComponentStory from "../../utilities/storybook/addComponentStory";

addComponentStory(TextArea, {
  id: "text-area-id",
  label: "TextArea",
  name: "text-area",
  onBlur: action("onBlur"),
  onChange: action("onChange"),
  onClick: action("onClick"),
});
