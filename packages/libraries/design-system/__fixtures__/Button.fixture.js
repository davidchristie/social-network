import Button from '../src/components/Button/index.tsx';

export default {
  component: Button,
  props: {
    children: 'Button',
    disabled: false,
    onClick: () => window.alert('Click event'),
  },
};
