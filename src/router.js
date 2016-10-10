import Vue from 'vue';
import VueRouter from 'vue-router';

import IntroPage from './pages/IntroPage';
import QuestionPage from './pages/QuestionPage';
import ResultPage from './pages/ResultPage';
import TourPage from './pages/TourPage';
import TourPageAll from './pages/TourPageAll';
import AboutPage from './pages/AboutPage';

Vue.use(VueRouter);

const routes = [
  {
    name: 'intro',
    path: '/',
    component: IntroPage,
  },
  {
    name: 'question',
    path: '/question/:id',
    component: QuestionPage,
  },
  {
    name: 'result',
    path: '/result',
    component: ResultPage,
  },
  {
    name: 'tourAll',
    path: '/tour/:direction/',
    component: TourPageAll,
  },
  {
    name: 'tour',
    path: '/tour/:direction/:id',
    component: TourPage,
  },
  {
    name: 'about',
    path: '/about',
    component: AboutPage,
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export const routeSequence = {
  intro: 1,
  question: 2,
  result: 3,
  tour: 4,
  tourAll: 5,
  about: 6,
};

router.direction = 'next';

router.beforeEach((to, from, next) => {
  const toName = to.name;
  const fromName = from.name;
  if (!fromName) next();
  router.direction = routeSequence[toName] > routeSequence[fromName] ? 'next' : 'prev';
  next();
});

export default router;
