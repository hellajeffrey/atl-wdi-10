const express = require('express');
const app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/YO', function (req, res) {
  res.send('YO!');
});

var pirateController = require('./controllers/pirates.js');
app.use("/pirates", pirateController);

app.listen(3000, function () {
  console.log('listening on port 3000!');
});
