var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('public/home.html');
});
app.get('/survey', function(req, res) {
  res.send('public/survey.html');
});
