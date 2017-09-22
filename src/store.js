import Vue from 'vue';
import Vuex from 'vuex';
import isMobile from 'ismobilejs';
import './utils/modernizr';

Vue.use(Vuex);

const userLanguage = navigator.language || navigator.userLanguage;

/* eslint-disable no-param-reassign */
const store = new Vuex.Store({
  state: {
    answers: {},
    done: false,
    inTransition: false,
    isMobile,
    result: false,
    tourHinted: false,
    animation: window.Modernizr.webanimations,
    locale: userLanguage.startsWith('zh') ? 'zh' : 'en',
  },
  mutations: {
    answer(state, payload) {
      state.answers[payload.index] = payload.answer;
    },
    doneQuiz(state) {
      state.done = true;
    },
    setResult(state, payload) {
      state.result = payload.result;
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
    setLocale(state, locale) {
      state.locale = locale;
    },
  },
});

export default store;
