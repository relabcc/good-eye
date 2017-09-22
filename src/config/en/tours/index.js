import east from './east.json';
import west from './west.json';
import south from './south.json';
import north from './north.json';

const tours = {
  east: {
    direction: 'East Side Route',
    location: 'Xiangshan and Liuzhangli Area',
    description: 'A tasteful community that was once a munitions factory',
    spots: east,
    questions: [
      { item: 1, text: 'Western style breakfast brunch with coffee' },
      { item: 2, text: 'Look on Taipei from above' },
      { item: 3, text: 'Chicken rice' },
      { item: 4, text: 'Go to a fair' },
      { item: 6, text: 'Listen to music' },
      { item: 7, text: 'Shop for stationery' },
      { item: 8, text: 'Neo-American food' },
      { item: 10, text: 'Get a massage' },
    ],
  },
  west: {
    direction: 'West Side Route',
    location: 'Dadaocheng, Ximending, and Monga (Wanhua) Area',
    description: 'The lively and pioneering old part of town',
    spots: west,
    questions: [
      { item: 1, text: 'Temple entrance eateries' },
      { item: 2, text: 'Browse old tea shops' },
      { item: 4, text: 'Rice paste noodles' },
      { item: 12, text: 'Pray at a temple' },
      { item: 5, text: 'Visit old buildings' },
      { item: 6, text: 'Browse independent bookstores' },
      { item: 13, text: 'Nakasi style pork cutlet rice' },
      { item: 11, text: 'Go for a drink' },
    ],
  },
  south: {
    direction: 'South Side Route',
    location: 'Gongguan and Taipei Power Building Area',
    description: 'Cozy up in Gongguan for a day of books and music',
    spots: south,
    questions: [
      { item: 1, text: 'Healthy fruit salad' },
      { item: 3, text: 'Appreciate the masterpiece of a master architect' },
      { item: 4, text: 'Curry rice' },
      { item: 5, text: 'Shop' },
      { item: 6, text: 'Eat dessert' },
      { item: 7, text: 'Visit an artist village' },
      { item: 8, text: 'Yunnan cuisine' },
      { item: 9, text: 'Go to a live performance' },
    ],
  },
  north: {
    direction: 'North Side Route',
    location: 'Zhongshan and Shuanglian Area',
    description: 'An enchanting combination of foreign cultures and local creativity',
    spots: north,
    questions: [
      { item: 1, text: 'Delicious market food' },
      { item: 2, text: 'Visit a design bookstore' },
      { item: 3, text: 'Creative tapas' },
      { item: 4, text: 'Visit a museum' },
      { item: 5, text: 'Continue shopping' },
      { item: 6, text: 'Learn about block printing' },
      { item: 7, text: 'Night market food' },
      { item: 8, text: 'Continue shopping' },
    ],
  },
};

export default tours;
