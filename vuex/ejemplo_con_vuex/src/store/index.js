import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
        filtered: '',
    }
  },
  mutations: {
    SET_FILTERED(state, newFiltered) {
        state.filtered = newFiltered;
    },
  },
  actions: {
    setFiltered({commit}, newFiltered) {
        commit('SET_FILTERED', newFiltered);
    },
  }
});

export default store;