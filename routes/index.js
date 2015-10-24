var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('first_page');
});

router.get('/breastfed', function(req, res, next) {
  res.render('breastfed');
});

router.get('/milk', function(req, res, next) {
  res.render('milk');
});

router.get('/bar', function(req, res, next) {
  res.render('/morris.js-0.5.1/examples/bar')
});

module.exports = router;
