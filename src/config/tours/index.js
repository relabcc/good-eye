// import { mapValues } from 'lodash';

import east from './east.json';
import west from './west.json';
import south from './south.json';
import north from './north.json';
// import spots from '../../assets/spots';

const tours = {
  east: {
    direction: '城東',
    location: '象山與六張犁周邊',
    description: '從舊時的兵工廠到品味生活的聚落',
    spots: east,
    questions: [
      { item: 1, text: '西式早午餐配咖啡' },
      { item: 2, text: '登高俯瞰台北' },
      { item: 3, text: '雞肉飯' },
      { item: 4, text: '逛市集' },
      { item: 6, text: '聽音樂' },
      { item: 7, text: '買文具' },
      { item: 8, text: '新美式料理' },
      { item: 10, text: '按摩' },
    ],
  },
  west: {
    direction: '城西',
    location: '大稻埕、西門町與艋舺周邊',
    description: '流轉城西百年風華',
    spots: west,
    questions: [
      { item: 1, text: '廟口小吃' },
      { item: 2, text: '逛老茶行' },
      { item: 4, text: '米苔目' },
      { item: 12, text: '廟裡拜拜' },
      { item: 5, text: '看老屋' },
      { item: 6, text: '逛獨立書店' },
      { item: 13, text: '那卡西風排骨飯' },
      { item: 11, text: '喝杯小酒' },
    ],
  },
  south: {
    direction: '城南',
    location: '公館、台電大樓周邊',
    description: '跟著公館文青的腳步走一天',
    spots: south,
    questions: [
      { item: 1, text: '健康水果沙拉' },
      { item: 3, text: '欣賞建築大師作品' },
      { item: 4, text: '咖哩飯' },
      { item: 5, text: '逛街' },
      { item: 6, text: '吃甜點' },
      { item: 7, text: '去藝術村走走' },
      { item: 8, text: '雲南菜' },
      { item: 9, text: '聽現場表演' },
    ],
  },
  north: {
    direction: '城北',
    location: '中山、雙連周邊',
    description: '異國文化與在地創意交融的迷人街區',
    spots: north,
    questions: [
      { item: 1, text: '市場美食' },
      { item: 2, text: '逛設計書店' },
      { item: 3, text: '創意Tapas料理' },
      { item: 4, text: '去博物館' },
      { item: 5, text: '繼續逛街' },
      { item: 6, text: '了解活版印刷' },
      { item: 7, text: '夜市小吃' },
      { item: 8, text: '繼續逛' },
    ],
  },
};

export default tours;
