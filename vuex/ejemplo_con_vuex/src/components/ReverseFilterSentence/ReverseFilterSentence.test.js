import { mount } from '@vue/test-utils'
import ReverseFilterSentence from './ReverseFilterSentence.vue'

describe('ReverseFilterSentence.vue', () => {
  test(`Comprobamos que se renderiza el componente.
   (prop) title = 'Reverse' -> <label>Reverse</label>`, () => {
    const title = 'Reverse'
    const wrapper = mount(ReverseFilterSentence, {
      props: {
        title,
      }
    });
    expect(wrapper.find('h1').text()).toMatch(title);
  });

  test(`Comprobamos que se invierte la cadena de texto proporcionada por props
  (prop) (sentence = 'Tahiche') => <label>ehcihaT</label>`, () => {
    const wrapper = mount(ReverseFilterSentence, {
      props: {
        sentence: 'Tahiche',
      }
    });
    expect(wrapper.find('#reverseLabel').text()).toBe('ehcihaT');
  });
})
