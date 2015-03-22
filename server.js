var express = require('express');
var app = express();

app.use('/css', express.static('./www/css'));
app.use('/js', express.static('./www/js'));

app.get('/api/users', function (req, res) {

  var data = [];
  for (var i = 0; i < 100; i++) {
    data.push({
      id: 'u_' + i,
      name: 'User ' + i,
      email: 'user' + i + '@mail.local'
    });
  }

  res.json(data);

});

app.get('/*', function (req, res) {
  res.sendFile(__dirname  + '/www/index.html');
});

module.exports = app;
