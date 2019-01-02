import { withOptions } from "@storybook/addon-options";
import { addDecorator, configure } from "@storybook/react";

addDecorator(withOptions({
  name: "Style Guide",
  url: "https://github.com/davidchristie/social-network",
}));

const requireDesignSystem = require.context("../../design-system/src/components", true, /\.stories\.tsx?$/);
const requireDomainModel = require.context("../../domain-model/src/components", true, /\.stories\.tsx?$/);
const requirePageLayouts = require.context("../../page-layouts/src/components", true, /\.stories\.tsx?$/);

function loadStories () {
  requireDesignSystem.keys().forEach((filename) => requireDesignSystem(filename));
  requireDomainModel.keys().forEach((filename) => requireDomainModel(filename));
  requirePageLayouts.keys().forEach((filename) => requirePageLayouts(filename));
}

configure(loadStories, module);
