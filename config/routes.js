var Index = require('../app/controllers/index');
var Chapter1 = require('../app/controllers/chapter1');

module.exports = function(app) {

  // Index
  app.get('/', Index.index);

  // chapter 1
  app.get('/c1/helloWorld', Chapter1.helloWorld);
  app.get('/c1/updateClock', Chapter1.updateClock);
};
