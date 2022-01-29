import MyReverseFilterSentence from './ReverseFilterSentence.vue';
import results from '../../../.jest-test-results.json';
import { withTests } from '@storybook/addon-jest';

export default {
  title: 'Mi Biblioteca/ReverseFilterSentence',
  component: MyReverseFilterSentence,
  decorators: [withTests({ results })],
  argTypes: {
    title: {
      control: { 
        type: 'text'
      },
    },
    sentence: {
      control: {
        type: 'text'
      },
    },
  },
};

const Template = (args) => ({
  components: { MyReverseFilterSentence },
  setup() {
    return { args };
  },
  template: '<MyReverseFilterSentence v-bind="args"/>',
});

export const Default = Template.bind({});
Default.args = {
  title: 'Reverse',
  sentence: '',
};
Default.parameters = {
  jest: ['ReverseFilterSentence.test.js']
};