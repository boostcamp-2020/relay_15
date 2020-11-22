# 3rd Week

---

# **BOOST WORLD FRONT**

## **작성 멤버**

J194 조찬영, J172 임한동, J147 이소정, J179 전병재, J099 송진현, J013 구승효

## **사용 기술**

React.js, Context API, styled-components, axios

### 진행 방벙

각자 초기 코드 분석 및 구성 단계에서는 VSC 의 live share 기능을 활용해 각자 코드 분석과 리액트 문법등을 익히고 간단하게 구역을 나눠서 작업

어느정도 문법을 익히고는 각자 레포지토리를 fork해 기능별로 나눠서 작업한 뒤 각 브랜치로 병합 하면서 작업

## **사용법**

`npm install`

`npm start`

## **간단한 설명**

**src/**

dev tool

- eslint: airbnb javascript rull 적용
- prettier: 코드 스타일 툴 적용

components

- button: 공용 버튼 컴포넌트
- writePostForm: 게시글 작성 컴포넌트
- PostDetail : 게시글 상세뷰 + 추천리스트 컴포넌트
- Post : 게시글 내용 컴포넌트
- PostList: 게시글 리스트 컴포넌트

### 변동 사항

- 방명록 탭 제거 (메인 페이지)

    → 메인 페이지의 홈에 방명록이 있어서 쓰이지 않아 제거

### 추가 기능

- 게시판 이미지 업로드
- 게시글 내용 하단에 추천 게시글(게시글 이미지와 관련있는 게시글) 표시