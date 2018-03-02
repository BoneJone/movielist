var express = require('express');
var router = express.Router();

//GET edit. You can edit your movielist
router.get('/', function(req, res, next){
  res.render('edit');
});

module.exports = router;
