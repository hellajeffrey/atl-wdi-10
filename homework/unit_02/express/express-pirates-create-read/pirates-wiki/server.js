const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

var pirateController = require('./controllers/pirates.js');
app.use("/pirates", pirateController);

app.listen(3000, function () {
  console.log('listening on port 3000!')
})

