//requirements
var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');


//all routes for /pirate
router.get('/', function(req, res) {
  router.send('Hello world');
});

router.get('/new', function(req, res) {
  router.render('new');
});

router.get('/:id', function(req, res) {
  router.send('Hello world 2');
});

router.post('/create', function(req, res) {
  router.send('I love dev');
});


//exports
module.exports = router;//your code below
