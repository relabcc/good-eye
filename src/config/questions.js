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

const mapChoices = (title, index) => ({
  title,
  choices: shuffle([
    { tour: 'west', item: tours.west.questions[index] },
    { tour: 'east', item: tours.east.questions[index] },
    { tour: 'north', item: tours.north.questions[index] },
    { tour: 'south', item: tours.south.questions[index] },
  ]),
});

export default titles.map(mapChoices);
