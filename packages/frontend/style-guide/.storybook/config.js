import { configure } from '@storybook/react';

const requireDesignSystem = require.context('../../design-system/src/components', true, /\.stories\.tsx?$/)
const requireDomainModel = require.context('../../domain-model/src/components', true, /\.stories\.tsx?$/)

function loadStories () {
  requireDesignSystem.keys().forEach((filename) => requireDesignSystem(filename))
  requireDomainModel.keys().forEach((filename) => requireDomainModel(filename))
}

configure(loadStories, module);
