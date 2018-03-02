var express = require('express');
var router = express.Router();

//GET show for movielist 
router.get('/', function(req, res, next){
  res.render('show');
});

module.exports = router;
