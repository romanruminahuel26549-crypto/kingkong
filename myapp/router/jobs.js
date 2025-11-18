var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/', function(req, res, next) {
  res.send('create a new user');
});
router.put('/', function(req, res, next) {
  res.send('update a user');
});

router.delete('/', function(req, res, next) {
  res.send('delete a user');
});


module.exports = router; 
