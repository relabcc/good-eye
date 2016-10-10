import Vue from 'vue';
import Vuex from 'vuex';
import isMobile from 'ismobilejs';

Vue.use(Vuex);

/* eslint-disable no-param-reassign */
const store = new Vuex.Store({
  state: {
    answers: {},
    inTransition: false,
    isMobile,
    tourHinted: false,
  },
  mutations: {
    answer(state, payload) {
      state.answers[payload.index] = payload.answer;
    },
    transitionStart(state) {
      state.inTransition = true;
    },
    transitionEnd(state) {
      state.inTransition = false;
    },
    tourHint(state) {
      state.tourHinted = true;
    },
  },
});

export default store;
