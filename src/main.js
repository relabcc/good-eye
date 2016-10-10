// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import 'sanitize.css/sanitize.css';
import 'animate.css';

import pace from './vendor/pace';
import './assets/pace.css';

import App from './App';
import router from './router';
import store from './store';

pace.start();
pace.on('done', () => {
  // document.getElementById('preloader').remove();
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store,
  });
});
