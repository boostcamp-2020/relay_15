const fs = require('fs');
const filepath = "/static/database/users.json";
var express = require('express');
var router = express.Router();
var users = require('../public/database/users.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('users', users);
});
router.post('/', function(req, res, next) {
    const len = users.data.length;
    users.data.push({
        no: (len + 1),
        email: `hello${(len+1)}@naver.com`,
        password: "abc123",
        name: `사용자${len+1}`
    });
    const stringJson = JSON.stringify(users);

    fs.open('./public/database/users.json', 'a', "666", function(err, id) {
            if (err) {
                console.log("file open err!!");
            } else {
                fs.writeFile(id, '', function() {
                    fs.write(id, stringJson, null, 'utf8', function(err) {
                        console.log('file was saved!');
                    });
                });
            }

        })
        // let dataBuffer = fs.readFileSync(filepath)
        // let dataJSON = dataBuffer.toString();
        // let userlist = JSON.parse(dataJSON);

    // const len = users.data.length;
    // users.data.push({
    //     no: (len + 1),
    //     email: `hello${(len+1)}@naver.com`,
    //     password: "abc123",
    //     name: `사용자${len}`
    // });
    // res.send(stringJson);


    // fs.writeFileSync(filepath, listJSON);
});

module.exports = router;