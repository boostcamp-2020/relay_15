var express = require('express');
var router = express.Router();
var userInfo = require('../public/database/users.json');

router.post('/', function(req, res) {
    const userData = userInfo.data
    const len = userData.length

    console.log(12345)
    console.log(req.body)

    for (var i = 0; i < len; i++) {
        if (req.body.email === userData[i].email && req.body.password === userData[i].password) {
            break
        }   
    }

    if (i === len) {
        res.status(404).json({ message : 'failed' })
    } else {
        res.status(200).json({ message : 'success', email : userData[i].email, name : userData[i].name })
    }
});

module.exports = router;
