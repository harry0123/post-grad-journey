var express = require('express');
var router = express.Router();
var State = require('../models/state');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

/* GET state page. */
router.get('/us/:state', function(req, res) {
  res.render('state', {state: req.params.state});
});

/* GET abroad page */
router.get('/abroad', function(req, res) {
  res.render('abroad');
});

/* GET country page */
router.get('/abroad/:country', function(req, res) {
  res.render('abroad', {country: req.params.country});
});

module.exports = router;
