var Index = require('../app/controllers/index');
var Chapter2 = require('../app/controllers/chapter2');

module.exports = function(app) {

  // Index
  app.get('/', Index.index);

  // chapter 2
  app.get('/c2/helloWorld', Chapter2.helloWorld);
  app.get('/c2/updateClock', Chapter2.updateClock);
};
