const fs = require('fs');
var express = require('express');
var router = express.Router();
var guestbooks = require('../public/database/guestbook.json');
var userInfo = require('../public/database/users.json');

/* GET guestbook listing. */
router.get('/:email', function(req, res, next) {
    let guestbooklen = guestbooks.data.length;
    let userlen = userInfo.data.length;
    let rslt = {
        email: req.params.email,
        name: '',
        guestbooks: '',
        friends: ''
    }
    for (let i = 0; i < guestbooklen; i++) {
        if (guestbooks.data[i].to === req.params.email) {
            rslt.guestbooks = guestbooks.data[i].data
            break;
        }
    };

    for (let i = 0; i < userlen; i++) {
        if (userInfo.data[i].email === req.params.email) {
            rslt.name = userInfo.data[i].name
            rslt.friends = userInfo.data[i].friends
        }
    }

    res.json(rslt)
});

router.post('/', function(req, res, next) {
    let len = guestbooks.data.length;

    for (var i = 0; i < len; i++) {
        if (guestbooks.data[i].to === req.body.to) {
            break;
        }
    };

    const dataBuffer = fs.readFileSync('./public/database/guestbook.json')
    const dataJson = dataBuffer.toString()
    const guestbooks = JSON.parse(dataJson)
    const guestlen = guestbooks.data[i].data.length;
    guestbooks.data[i].data.push({
        no: (guestlen + 1),
        from: `${req.body.from}`,
        contents: `${req.body.contents}`
    });
    const stringJson = JSON.stringify(guestbooks);
    fs.writeFileSync('./public/database/guestbook.json', stringJson)

    res.status(200).send({ message: 'success' });
})

module.exports = router;