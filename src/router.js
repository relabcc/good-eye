import Vue from 'vue';
import VueRouter from 'vue-router';
import isMobile from 'ismobilejs';

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
];

if (isMobile.any) {
  routes.push({ path: '/tour/:direction/:id', component: TourPage });
} else {
  routes.push({ path: '/tour/:direction/', component: TourPageAll });
}

const router = new VueRouter({
  routes,
});

export default router;
