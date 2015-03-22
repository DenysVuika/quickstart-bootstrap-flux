var express = require('express');
var app = express();

app.use('/css', express.static('./www/css'));
app.use('/js', express.static('./www/js'));

app.get('/*', function (req, res) {
  res.sendFile(__dirname  + '/www/index.html');
});

module.exports = app;
