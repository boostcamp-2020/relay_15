var express = require('express');
var router = express.Router();

router.post('/', function(request, response) {
    getData(request.body).then(function(rsltData){
        response.send(rsltData)
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
