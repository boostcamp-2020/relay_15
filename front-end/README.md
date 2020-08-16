# BOOST WORLD FRONT

## 작성 멤버

1주차: J029 김도연, J067 문건우

2주차: J194 조찬영, J172 임한동, J099 송진현, J147 이소정, J179 전병재, J013 구승효

## 사용 기술

React.js, Context API, styled-components

## 사용법

front-end/src/secret.js 에 `export const BASE_URL = 'url';` 로컬에서 실행한다면 로컬 url 주소 입력

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

- MainHomeSection: 메인 화면의 방명록 컴포넌트
- MainPostSection: 메인 화면의 게시글 목록 컴포넌트
- Post: 게시글 목록 아이템 컴포넌트
- PostDetail : 게시글 상세 내용 + 추천리스트(Post) 컴포넌트
- WritePostForm: 게시글 작성 폼 컴포넌트