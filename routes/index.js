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

router.get('/report', function(req, res, next) {
  res.render('report')
});

module.exports = router;
