

//////////////
var root = __dirname;

var session = require('express-session');
var cookieParser = require('cookie-parser'); // the session is stored in a cookie, so we use this to parse it

var express = require('express');
var fs = require('fs');
var app = express();
app.use(cookieParser());
app.use(session({ secret: 'app', cookie: { maxAge: 60000 }}));
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var methodOverride = require('method-override');
var logger = require('morgan');
var path = require('path');
var db = require('./db.js');


// app.listen(3000);//local

app.set('port', (process.env.PORT || 3000));//for online
app.listen(app.get('port'), function(){
  console.log("app running on port : ", app.get('port'));
});

// app.use(session({
//   cookieName: 'session',
//   secret: 'random_string_goes_here',
//   duration: 30 * 60 * 1000,
//   activeDuration: 5 * 60 * 1000,
// }));

app.engine('handlebars', exphbs({defaultLayout: 'main', extname: 'handlebars'}));
app.set('views', path.join(root, 'views'));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static('public'));
app.use(logger('dev'));

//use sessions
app.use(session({
  secret: 'thisisitotallysecret',
  saveUninitialized: false,
  resave: false
}));

app.use(methodOverride(function(req, res) {
 if (req.body && typeof req.body === 'object' && '_method' in req.body) {
   // look in urlencoded POST bodies and delete it
   var method = req.body._method;
   delete req.body._method;
   return method;
 }
}));

fs.readdirSync('./controllers').forEach(function (file) {
 if(file.substr(-3) == '.js') {
     route = require('./controllers/' + file);
     console.log('this is the route', route);
     route.controller(app);
 }
});

//ROOT ROUTE
app.get('/', function (req, res) {
  var userObject = {
    username : req.session.signed_in_username
  };
  console.log(userObject);
  res.render('home', userObject);
});

