var express = require('express');
var path = require('path');
var port = process.env.PORT || 3400;
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// models loading
var models_path = __dirname + '/app/models';
var walk = function(path) {
  fs
    .readdirSync(path)
    .forEach(function(file) {
      var newPath = path + '/' + file;
      var stat = fs.statSync(newPath);

      if (stat.isFile()) {
        if (/(.*)\.(js|coffee)/.test(file)) {
          require(newPath)
        }
      } else if (stat.isDirectory()){
        walk(newPath);
      }
    });
}

app.set('views', './app/views');
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(session({
  secret: 'myAngularApp',
  resave: false,
  saveUninitialized: false
}));
app.use(multer());

app.use(express.static(path.join(__dirname, 'public')));
app.locals.moment = require('moment');

if ('development' === app.get('env')) {
  app.set('showStackError', true);
  app.use(logger(':method :url :status :remote-addr --:response-time ms'));
  app.locals.pretty = true;
}

require('./config/routes')(app);

app.listen(port);

console.log('myAngularApp started on port ' + port);

