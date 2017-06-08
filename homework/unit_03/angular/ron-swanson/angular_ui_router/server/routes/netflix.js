var express = require('express');
var router = express.Router();
var Netflix = require('../../models/netflix.js');

// GET
router.get('/', function(request, response) {
  Netflix.find(function(error, netflix) {
    if(error) response.json({message: 'Could not find any netflix'});

    response.json({netflix: netflix});
  })
});

// POST
router.post('/', function(request, response) {
  console.log('in POST');
  console.log('body:',request.body);

  var netflix = new Netflix(request.body);

  netflix.save(function(error) {
    if(error) response.json({messsage: 'Could not ceate netflix b/c:' + error});

    response.json({netflix: netflix});
  });
});

module.exports = router;
