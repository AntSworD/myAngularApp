var Index = require('../app/controllers/index');

module.exports = function(app) {

  // Index
  app.get('/', Index.index);
};
