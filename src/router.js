import Vue from 'vue';
import VueRouter from 'vue-router';

import IntroPage from './components/IntroPage';
import QuestionPage from './components/QuestionPage';
import ResultPage from './components/ResultPage';
import TourPage from './components/TourPage';
import TourPageAll from './components/TourPageAll';
import AboutPage from './components/AboutPage';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: IntroPage },
  { path: '/question/:id', component: QuestionPage },
  { path: '/result', component: ResultPage },
  { path: '/about', component: AboutPage },
  { path: '/tour/:direction/', component: TourPageAll },
  { path: '/tour/:direction/:id', component: TourPage },
];

const router = new VueRouter({
  routes,
});

export default router;
