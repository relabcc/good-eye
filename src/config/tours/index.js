import east from './east.json';
import west from './west.json';
import south from './south.json';
import north from './north.json';

const tours = {
  east: {
    direction: '城東',
    location: '象山與六張犁周邊',
    description: '從舊時的兵工廠到品味生活的聚落',
    spots: east,
    questions: [1, 2, 3, 4, 6, 7, 8, 10],
  },
  west: {
    direction: '城西',
    location: '大稻埕、西門町與艋舺周邊',
    description: '流轉城西百年風華',
    spots: west,
    questions: [1, 2, 4, 12, 5, 6, 13, 11],
  },
  south: {
    direction: '城南',
    location: '公館、台電大樓周邊',
    description: '跟著公館文青的腳步走一天',
    spots: south,
    questions: [1, 3, 4, 5, 6, 7, 8, 9],
  },
  north: {
    direction: '城北',
    location: '中山、雙連周邊',
    description: '異國文化與在地創意交融的迷人街區',
    spots: north,
    questions: [1, 2, 3, 4, 5, 6, 7, 8],
  },
};

export default tours;
