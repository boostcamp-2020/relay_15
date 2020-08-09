function sendInfo (email, password) {
    let user = {
        email: email,
        password: password
    };

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(user),
    })
    .then(function(response) {
        return response.json()
    })
    .then(function(myJson) {
        return console.log(JSON.stringify(myJson))
    })
}

function callAiApi (text) {
    let data = {
        checktext: text
    };

    fetch('/guestbook', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data),
    })
    .then(function(response) {
        return response.json()
    })
    .then(function(myJson) {
        return console.log(JSON.stringify(myJson))
    })
}

function getGuestbook () {
    fetch('/guestbook')
    .then(function(response) {
        return response.json()
    })
    .then(function(myJson) {
        return console.log(JSON.stringify(myJson))
    })
}

function addGuestbook () {
    let data = {
        to : 'sample1@naver.com',
        from : '456',
        contents : '안녕하세요'
    };

    fetch('/guestbook', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data),
    })
    .then(function(response) {
        return response.json()
    })
    .then(function(myJson) {
        return console.log(JSON.stringify(myJson))
    })
}