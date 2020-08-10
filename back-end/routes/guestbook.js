var express = require('express');
var router = express.Router();
//var guestbooks = require('../public/database/guestbook.json');
//var userInfo = require('../public/database/users.json');

/* GET guestbook listing. */
router.get('/:email', function(req, res, next) {
    const fs = require('fs');
    const dataBuffer = fs.readFileSync('./public/database/users.json')
    const dataJson = dataBuffer.toString()
    const userInfo = JSON.parse(dataJson)

    const dataBuffer_guest = fs.readFileSync('./public/database/guestbook.json')
    const dataJson_guest = dataBuffer_guest.toString()
    const guestbooks = JSON.parse(dataJson_guest)

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
    const fs = require('fs');
    const dataBuffer_guest = fs.readFileSync('./public/database/guestbook.json')
    const dataJson_guest = dataBuffer_guest.toString()
    const guestbooks = JSON.parse(dataJson_guest)

    let len = guestbooks.data.length;

    for (var i = 0; i < len; i++) {
        if (guestbooks.data[i].to === req.body.to) {
            break;
        }
    };

    const dataBuffer = fs.readFileSync('./public/database/guestbook.json')
    const dataJson = dataBuffer.toString()
    const guestlists = JSON.parse(dataJson)
    const guestlen = guestlists.data[i].data.length;

    getData({checktext:`${req.body.content}`}).then(function(rsltData){
        guestlists.data[i].data.push({
            no : (guestlen + 1),
            from : `${req.body.from}`,
            contents : `${req.body.content}`,
            isBad : rsltData.Result
        });

        const stringJson = JSON.stringify(guestlists);
        fs.writeFileSync('./public/database/guestbook.json', stringJson)

        res.send(guestlists.data[i].data)
    })
})

function getData (data) {
    return new Promise(function(resolve){
        const fetch = require('node-fetch');
        fetch('http://15.164.227.86:8000/predict/', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(json => resolve(json));
    })
}

module.exports = router;