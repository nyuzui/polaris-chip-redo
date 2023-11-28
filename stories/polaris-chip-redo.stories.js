import { html } from 'lit';
import '../src/polaris-chip-redo.js';

export default {
  title: 'PolarisChipRedo',
  component: 'polaris-chip-redo',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <polaris-chip-redo
      style="--polaris-chip-redo-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </polaris-chip-redo>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
