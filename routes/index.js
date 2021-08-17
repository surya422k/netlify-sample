var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/demo', (req,res,next) => {
  res.render('A Demo App!!');
});

module.exports = router;
