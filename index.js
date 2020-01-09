var express = require('express');
var app = express();

var data = require("./data.json");

app.set('view engine', 'pug');

app.use('/', express.static('static'));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/people/:person', function(req, res) {
  var person = data.people[req.params.person];
  person.filter
  res.render('people', person);
});

app.listen(80, function() {
  console.log('Website listening on port 80!');
});
