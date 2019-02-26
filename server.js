// Pull in required dependencies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');
var port = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the 'public' directory
console.log(path.join(__dirname , 'public'));
app.use(express.static(path.join(__dirname , 'public')));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// Set Handlebars as the view engine
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them
var routes = require('./controllers/burger_controller');


//'./controllers/burger_controller.js'
app.use('/', routes);

app.listen(port);