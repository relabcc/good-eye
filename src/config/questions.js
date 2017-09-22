import { shuffle } from 'lodash';
import zhTours from './zh/tours';
import zhTitles from './zh/titles';

const mapChoices = (tour, index, tours) => {
  const choice = tours[tour].questions[index];
  return {
    ...choice,
    tour,
  };
};

const mapQuestions = (title, index, tours) => ({
  title,
  choices: shuffle(Object.keys(tours))
    .map(tour => mapChoices(tour, index, tours)),
});

export default {
  zh: zhTitles.map((title, index) => mapQuestions(title, index, zhTours)),
};
