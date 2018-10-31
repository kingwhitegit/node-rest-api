const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  port = process.env.PORT || 3000;

global.__basedir = __dirname;

app.listen(port);
console.log('API server started on: ' + port);

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const routes = require('./router/router1.js'); //importing route
routes(app); //register the route