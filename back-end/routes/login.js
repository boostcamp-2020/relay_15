var express = require('express');
var router = express.Router();
var userInfo = require('../public/database/users.json');

router.post('/', function(req, res) {
    const userData = userInfo.data
    const len = userData.length

    for (var i = 0; i < len; i++) {
        if (req.body.email === userData[i].email && req.body.password === userData[i].password) {
            break
        }   
    }

    if (i === len) {
        res.send({loginStatus : 'failed'})
    } else {
        res.send({loginStatus : 'successed', name : userData[i].name})
    }
});

module.exports = router;
