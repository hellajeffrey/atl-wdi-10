var express = require('express');
var app     = express();
var port    = 3000;
app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});

app.get('/', function(req, res, next) {
    res.render("index.hbs");
});
app.get('/topping/pepperoni:type', function(req, res, next) {
    res.render("index.hbs");
});
app.get('/order/10/medium', function(req, res, next) {
     res.render("index.hbs");
 });
app.get('*', function(req, res){
  res.send('what???', 404);
});

// app.get("/test/:someValue", function(req, res, next) {
//      res.render("views/index.hbs", { message: req.params.someValue });
//   });

      //index.hbs

var hbs = require('hbs');
app.set("view engine", "hbs");
app.set('views', './views');
