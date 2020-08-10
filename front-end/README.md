# BOOST WORLD FRONT

## 작성 멤버

J029 김도연, J067 문건우

## 사용 기술

React.js, Context API, styled-components

## 사용법

`npm install`

`npm start`

## 간단한 설명

**src/**

contexts

- MemberContext: Context API를 사용하여 로그인이나 홈페이지 정보 상태 관리

hooks

- useInput 인풋창 관련 쉽게 하기 위한 커스텀훅
- 로그인, 로그아웃 체크 커스텀훅

apis

- apiFetch: http 통신을 쉽게 하기 위한 함수

pages

- Login: 첫 로그인 페이지,
- Main: 로그인 후 미니 홈피 페이지
- SignUp: 회원가입 페이지
- MyPage: 회원 정보를 수정할 수 있는 페이지(현재 화면만 구현)

components

- BoostHeader: 헤더 컴포넌트
- Friend: 친구 element 컴포넌트
- GeustBook: 방명록 element 컴포넌트
