var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('indexs', { title: 'Express', name: 'BoostCamp' });
});

module.exports = router;