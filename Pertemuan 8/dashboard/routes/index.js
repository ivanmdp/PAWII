var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/tambah', function(req, res, next) {
  res.render('tambah', { title: 'Express' });
});

router.get('/daftar', function(req, res, next) {
  res.render('daftar', { title: 'Express' });
});

module.exports = router;