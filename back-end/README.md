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
  // 로그인 성공 시
  {
  	"loginStatus" : "successed",
  	"name" : userName
  }
  
  // 로그인 실패 시
  {
  	"loginStatus" : "failed"
  }
  ```

  



#### /call

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

  
