var cors = require('cors');
var express = require('express');
var app = express();

app.use(cors({ origin: 'https://trello.com' }));

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});