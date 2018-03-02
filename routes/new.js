var express = require('express');
var router = express.Router();

/* GET new = newlist for making a new movielist */
router.get('/', function(req, res, next){
  res.render('new');
});

module.exports = router;
