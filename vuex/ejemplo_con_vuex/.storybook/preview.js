
import Vuex from 'vuex';
import {app} from '@storybook/vue3';

app.use(Vuex)


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}