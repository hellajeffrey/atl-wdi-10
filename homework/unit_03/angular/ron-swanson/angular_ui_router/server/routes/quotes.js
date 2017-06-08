var express = require('express');
var router = express.Router();
var Quote = require('../../models/quote.js');

// GET
router.get('/', function(request, response) {
  Quote.find(function(error, quotes) {
    if(error) response.json({message: 'Could not find any quotes'});

    response.json({quotes: quotes});
  })
});

// POST
router.post('/', function(request, response) {
  console.log('in POST');
  console.log('body:',request.body);

  var quotes = new Quotes(request.body);

  quotes.save(function(error) {
    if(error) response.json({messsage: 'Could not ceate quotes b/c:' + error});

    response.json({quotes: quotes});
  });
});

module.exports = router;
