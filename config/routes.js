var Index = require('../app/controllers/index');
var Chapter2 = require('../app/controllers/chapter2');
var Chapter6 = require('../app/controllers/chapter6');
var Chapter7 = require('../app/controllers/chapter7');
var Chapter8 = require('../app/controllers/chapter8');
var Chapter9 = require('../app/controllers/chapter9');

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

  // chapter 7
  app.get('/c7/signupForm', Chapter7.signupForm);
  app.get('/c7/signupFormSubmitted', Chapter7.signupFormSubmitted);
  app.get('/c7/signupFormFocus', Chapter7.signupFormFocus);

  // chapter 8
  app.get('/c8/greeting', Chapter8.greeting);
  app.get('/c8/scope', Chapter8.scope);
  app.get('/c8/directive', Chapter8.directive);
  app.get('/c8/someAttr', Chapter8.someAttr);

  // chapter 9
  app.get('/c9/ngDisabled', Chapter9.ngDisabled);
  app.get('/c9/ngSelected', Chapter9.ngSelected);
  app.get('/c9/ngHref', Chapter9.ngHref);
  app.get('/c9/ngSrc', Chapter9.ngSrc);
};
