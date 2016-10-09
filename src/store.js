import Vue from 'vue';
import Vuex from 'vuex';
import isMobile from 'ismobilejs';

Vue.use(Vuex);

/* eslint-disable no-param-reassign */
const store = new Vuex.Store({
  state: {
    answers: {},
    isMobile,
  },
  mutations: {
    answer(state, payload) {
      state.answers[payload.index] = payload.answer;
    },
  },
});

export default store;
