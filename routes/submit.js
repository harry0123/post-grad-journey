var express = require('express');
var router = express.Router();

/* GET submit page. */
router.get('/', function(req, res) {
  res.render('submit');
});

module.exports = router;
