var express = require('express');
var app = express();

var data = require("./data.json");

app.set('view engine', 'pug');

app.use('/', express.static('static'));

app.get('/', function(req, res) {
  var realtimeData = data;
  realtimeData.title = "Home";
  res.render('index', realtimeData);
});

app.get('/people/:person', function(req, res) {
  var realtimeData = data;
  realtimeData.selPerson = data.people[req.params.person];
  realtimeData.title = realtimeData.selPerson.name;
  res.render('people', realtimeData);
});

app.get('/imprint', function(req, res) {
  var realtimeData = data;
  realtimeData.title = "Imprint";
  res.render('imprint', realtimeData);
});

app.listen(80, function() {
  console.log('Website listening on port 80!');
});
