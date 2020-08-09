# Backend branch

hi


## Backend APIs
#### /login

- Input : JSON

  ```
  let user = {
  	email : email,
  	password : password
  }
  ```



- 호출 방식 : POST

  ```
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
  ```



- output : JSON

  ```
  // 로그인 성공 시 - status 200
  {
    message : "success"
  	email : "userEmail",
    name : "userName"
  }
  
  // 로그인 실패 시 - status 404
  {
  	message : "failed"
  }
  ```

  



#### /call - ai 서버 호출하는 api

- Input : JSON

  ```
  let data = {
  	Checktext : text
  }
  ```



- 호출 방식 : POST

  ```
  fetch('/call', {
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
  ```



- output : JSON

  ```
  {
  	Checktext : text
  }
  ```

  



#### /guestbook

- Input : JSON

  ```
  let data = {
    to : 'sample1@naver.com',
    from : '적는사람이름',
    contents : '안녕하세요 ㅎㅎㅎ'
  };
  ```



- 호출 방식 : GET / POST

  ```
  // GET - 방명록 목록을 불러옴
  fetch('/guestbook')
  .then(function(response) {
    return response.json()
  })
  .then(function(myJson) {
    return console.log(JSON.stringify(myJson))
  })

  // POST - 방명록 저장
  fetch('/call', {
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
  ```



- output : JSON - status 200

  ```
  {
  	message : "success"
  }
  ```
