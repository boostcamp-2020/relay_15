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
        email : req.params.email,
        name : '',
        guestbooks : '',
        friends : ''
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

    const guestlen = guestbooks.data[i].data.length;

    getData({checktext:req.body.contents}).then(function(rsltData){
        guestbooks.data[i].data.push({
            no : (guestlen + 1),
            from : `${req.body.from}`,
            contents : `${req.body.contents}`,
            isBad : rsltData.Result
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

        res.send(guestbooks.data[i].data)
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