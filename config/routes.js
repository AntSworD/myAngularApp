var Index = require('../app/controllers/index');
var Chapter2 = require('../app/controllers/chapter2');
var Chapter6 = require('../app/controllers/chapter6');

module.exports = function(app) {

  // Index
  app.get('/', Index.index);

  // chapter 2
  app.get('/c2/helloWorld', Chapter2.helloWorld);
  app.get('/c2/updateClock', Chapter2.updateClock);

  // chapter 6
  app.get('/c6/parseValue', Chapter6.parseValue);
  app.get('/c6/previewText', Chapter6.previewText);
  app.get('/c6/config', Chapter6.config);
};
