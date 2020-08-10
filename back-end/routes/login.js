var express = require('express');
var router = express.Router();
//var userInfo = require('../public/database/users.json');

router.post('/', function(req, res) {
    const fs = require('fs');
    const dataBuffer = fs.readFileSync('./public/database/users.json')
    const dataJson = dataBuffer.toString()
    const list = JSON.parse(dataJson)

    const userData = list.data
    const len = userData.length

    console.log(req.body)

    for (var i = 0; i < len; i++) {
        if (req.body.email === userData[i].email && req.body.password === userData[i].password) {
            break
        }   
    }
    console.log('userData >>>>>>>>>')
    console.log(userData[i].email)
    console.log(userData[i].name)

    if (i === len) {
        res.status(404).json({ message : 'failed' })
    } else {
        res.status(200).json({
            message : 'success',
            email : userData[i].email,
            name : userData[i].name,
            friends : userData[i].friends
        })
    }
});

module.exports = router;
