var express = require('express');
var router = express.Router();
var userInfo = require('../user.json');

router.get('/', function(req, res, next) {
    res.send(userInfo)
});

module.exports = router;