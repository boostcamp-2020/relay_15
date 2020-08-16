# Backend

### Back-end 설치법

[참고 자료](https://sollife.tistory.com/18)

- express-generator 설치
  - npm install express-generator - g

* express 어플리케이션 생성
  - express --view=ejs backend

- express 실행

  ```
  cd backend
  npm install
  npm start
  ```

* express 접속
  - http://localhost:3000

- router 등록법

  - back-end / app.js 에 router를 추가로 등록한다

    ex )

    var testRouter = require('./routes/test');

    ...

    app.use('/test', testRouter);

* router 설정법

  - back-end / routes / test.js 에 설정

    ex )

    var express = require('express');

    var routes = express.Router();

    ...

    router.get() ...

    router.post() ...

- ai API 사용법

  - fetch('ai 서버 주소', {

    ​ headers : {

    ​ 'Content-Type': 'application/json',

    ​ 'Accept': 'application/json'

    ​ },

    ​ method: "POST",

    ​ body: JSON.stringify(data)

    })

    .then(res => res.json())

    .then(json => console.log(json))

## Backend APIs

#### /login - 로그인

- Input : JSON

  ```
  let user = {
  	email : email,
  	password : password
  }
  ```

* 호출 방식 : POST

- output : JSON

  ```
  // 로그인 성공 시 - status 200
  {
    message : 'success',
    email : userEmail,
    name : userName,
    friends : userFriends
  }

  // 로그인 실패 시 - status 404
  {
  	message : "failed"
  }
  ```

#### /guestbook/userEmail

- Input : JSON

  /guestbook/userEmail 로 GET 요청 보냄

* 호출 방식 : GET

* output : JSON

  ```
  {
  	email : userEmail,
    name : userName,
    guestbooks : userGuestbooks,
    friends : userFriends
  }
  ```

#### /guestbook

- Input : JSON

  ```
  {
    to : 'sample1@naver.com',
    from : '적는사람이름',
    contents : '안녕하세요 ㅎㅎㅎ'
  };
  ```

* 호출 방식 : POST

- output : JSON - status 200 & guestbooks.data

# 3주차 Backend API

## Backend APIs

### /post - 게시글 목록

> ### request
>
> x-www-form-urlencoded

```
{
  email : "sample1@naver.com"
}
```

> ### response

```
[
    {
        "id": 4,
        "title": "제목4"
    },
    {
        "id": 3,
        "title": "제목3"
    },
    {
        "id": 2,
        "title": "제목2"
    },
    {
        "id": 1,
        "title": "제목1"
    }
    ...
]
```

#### /post/:id - 게시글 내용

> ### request
>
> x-www-form-urlencoded

```
{
  email : "sample1@naver.com"
}
```

> ### response

```
{
    "id": 1,
    "title": "테스트1",
    "image": "test",
    "tags": "[\"back-pack\",\"bag\"]",
    "recommend": "{\"3\":\"테스트3\",\"41\":\"hello\",\"40\":\"hello\"}"
}
```

### /post/upload

> ### request
>
> x-www-form-urlencoded

```
{
    "id": 1,
    "title": "테스트1",
    "image": "http://localhost:5000/image/test.jpg",
    "tags": [1,2,3]
}
```

> ### response

### 성공 시

```
{
  true
}
```

### 실패 시

```
{
  false
}
```

### /post/image

> ### request
>
> form-data

```
이미지 파일을 form-data 에 담아 전송
```

> ### response

```
{
  url : "http://localhost:5000/image/test.jpg",
  tags : [1,2,3]
}
```

### /image/:image

> ### request

```
{}
```

> ### response

```
이미지 파일
```
