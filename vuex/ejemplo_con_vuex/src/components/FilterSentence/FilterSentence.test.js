import { mount } from '@vue/test-utils'
import FilterSentence from './FilterSentence.vue'

describe('FilterSentence.vue', () => {
  // Creamos una instancia local de un store "falso"
  // Este store puede tener la misma estructura que un store real
  // store = { states, actions, mutations, ...}
  const $store = {
    // Con esta función, simulamos la llamada a una función
    // Cuando el componente llame a this.$store.dispatch()
    // estará llamando a nuestra función falsa y no a la real
    dispatch: jest.fn()
  }

  test(`Comprobamos que se renderiza el componente.
   (prop) title = 'Filtrado' -> <title>Filtrador</title>`, () => {
    const title = 'Filtrador'
    const wrapper = mount(FilterSentence, {
      global: { // Le pasamos nuestros mocks para que sustituyan a los reales
        mocks: {
          $store
        }
      },
      props: {
        title,
      }
    });
    expect(wrapper.find('h1').text()).toMatch(title);
  });

  test(`(method) filterSentence.
   (filter = 'a') => 'tahi' -> 'thi'`, () => {
    const wrapper = mount(FilterSentence, {
      global: { // Le pasamos nuestros mocks para que sustituyan a los reales
        mocks: {
          $store
        }
      },
      props: {
        filter: 'a',
      }
    });
    const e = { 
      target: {
        value: 'tahi',
      }
    };
    wrapper.vm.filterSentence(e);
    expect(wrapper.vm.filtered).toBe('thi');
  });

  test(`Input. Para input.value = 'tahi' =>
   <label>thi</label>`, async () => {
    const wrapper = mount(FilterSentence, {
      global: { // Le pasamos nuestros mocks para que sustituyan a los reales
        mocks: {
          $store
        }
      },
      props: {
        filter: 'a',
      }
    });
    await wrapper.find('#originalSentence').setValue("tahi");
    expect(wrapper.find('label').text()).toBe('thi');
    expect($store.dispatch).toHaveBeenCalled(); // Validamos que se está llamando a Vuex
  });

})
