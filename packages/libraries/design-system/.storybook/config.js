import { withInfo } from '@storybook/addon-info';
import { addDecorator, configure } from '@storybook/react';

const req = require.context('../src/components', true, /\.stories\.tsx?$/)

addDecorator(
  withInfo({
    inline: true,
  })
);

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
