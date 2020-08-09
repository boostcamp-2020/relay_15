const fs = require('fs');

var express = require('express');
var router = express.Router();
var users = require('../public/database/users.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('users', users);
});

router.post('/', function(req, res, next) {
    const dataBuffer = fs.readFileSync('./public/database/users.json')
    const dataJson = dataBuffer.toString()
    const list = JSON.parse(dataJson)
    console.dir(list)

    const len = list.data.length;
    const info = req.body;
    list.data.push({
        no: (len + 1),
        email: `${info.email}`,
        password: `${info.password}`,
        name: `${info.name}`
    });
    console.dir(list)
    const stringJson = JSON.stringify(list);
    fs.writeFileSync('./public/database/users.json', stringJson)

    console.dir(info);
    res.send({ status: "OK", data: info });
});

module.exports = router;