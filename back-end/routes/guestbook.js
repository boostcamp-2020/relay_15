const fs = require('fs');
var express = require('express');
var router = express.Router();
var guestbooks = require('../public/database/guestbook.json');

/* GET guestbook listing. */
router.get('/', function(req, res, next) {
    res.send(guestbooks);
});

router.post('/', function(req, res, next) {
    let len = guestbooks.data.length;
    for (var i = 0; i < len; i++) {
        if (guestbooks.data[i].to === req.body.to) {
            break;
        }
    };

    const guestlen = guestbooks.data[i].data.length;

    guestbooks.data[i].data.push({
        no : (guestlen + 1),
        from : `${req.body.from}`,
        contents : `${req.body.contents}`
    });

    const stringJson = JSON.stringify(guestbooks);

    fs.open('./public/database/guestbook.json', 'a', "666", function(err, id) {
        if (err) {
            console.log("file open err!!");
        } else {
            fs.writeFile('./public/database/guestbook.json', '', function() {
                console.log('file is cleand!');
                fs.write(id, stringJson, null, 'utf8', function(err) {
                    console.log('file was saved!');
                });
            });
        }
    });

    res.status(200).send({ message : 'success' });
})

module.exports = router;