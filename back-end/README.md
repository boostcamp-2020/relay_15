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

## 담당자

> week3 : 김남진, 지화영, 진영기, 우승윤, 강동훈, 류남광

## Backend API

- local 작업 시 링크 : http://localhost:5000

> ### ERD
>
> ![image](https://user-images.githubusercontent.com/26570319/90324828-99735f00-dfae-11ea-9e7e-ab83224dcf2b.png)

> ### 테이블 생성 sql

```
create table if not exists post (
    id int auto_increment primary key,
    title varchar(50) not null,
    email varchar(50) not null,
    image varchar(50) not null,
	views int default 0 not null
);
create table if not exists tag (
	id int auto_increment primary key,
    name varchar(20) not null unique
);
create table if not exists postTag(
	postId int not null,
    tagId int not null,
    foreign key(postId) references post(id),
    foreign key(tagId) references tag(id)
);
```

## /post - 게시글 목록

> ### request

#### 호출 방식 : GET

#### data format : x-www-form-urlencoded

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

## /post/:id - 게시글 내용

> ### request

#### 호출 방식 : GET

#### data format : x-www-form-urlencoded

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

## /post/upload - 게시글 작성

> ### request

#### 호출 방식 : POST

#### data format : x-www-form-urlencoded

```
{
    "id": 1,
    "title": "테스트1",
    "image": "http://localhost:5000/image/test.jpg",
    "tags": [1,2,3]
}
```

> ### response

```
// 성공 시
{
  true
}

// 실패 시
{
  false
}
```

## /post/image - 이미지 저장

> ### request

#### 호출 방식 : POST

#### data format : form-data

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

## /image/:image - 이미지 요청

#### 호출 방식 : GET

> ### request

```
{}
```

> ### response

```
이미지 파일
```
