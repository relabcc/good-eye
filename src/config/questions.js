import tours from './tours';
import { shuffle } from 'lodash';

const titles = [
  '今天早餐想吃什麼？',
  '上午想去哪兒走走？',
  '中餐選項是？',
  '下午去哪邊逛逛？',
  '還想去哪裡？',
  '晚餐前上哪兒溜搭？',
  '晚餐吃什麼？',
  '晚上去哪裡續攤？',
];

const mapChoices = (tour, index) => ({
  tour,
  item: tours[tour].questions[index].item,
  text: tours[tour].questions[index].text,
});

const mapQuestions = (title, index) => ({
  title,
  choices: shuffle(Object.keys(tours))
    .map(tour => mapChoices(tour, index)),
});

export default titles.map(mapQuestions);
