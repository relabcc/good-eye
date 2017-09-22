const fs = require('fs');
const ghpages = require('gh-pages');

fs.writeFile('./dist/CNAME', 'game.goodeye.guide', () => {
  ghpages.publish('dist');
});
