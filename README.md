# relay_15

배포 주소: http://101.101.211.23/

## 1st week

- [라떼 챌린지 사전조사](https://github.com/boostcamp-2020/relay_15/blob/master/latte_challenge_pilot.md)
- [라떼 챌린지 기획서](https://github.com/boostcamp-2020/relay_15/blob/master/latte_challenge_%20proposal.md)

- 참여자 리스트

  |                        |        |        |        |
  | :--------------------: | :----: | :----: | :----: |
  | 박진영 (dim**\*\*\***) | 박진용 | 백지영 | 서광근 |
  |         서유빈         | 석민지 | 손정현 | 송원석 |
  |         송진현         | 시경덕 | 신동민 | 신동훈 |

## 2nd week

### 라떼첼린지 - 싸이월드

### 요구사항

- 1. 기존 서비스 기능
     - 회원 가입 ( 구글 폼 임베딩 제외 ) 및 로그인
     - 회원 정보 변경 및 회원 탈퇴
     - 미니 홈피 기능 중 방명록 ( 게시판 제외 )
     - 일촌 목록 및 일촌 미니 홈피 방명록 이동 ( 일촌 추천 기능 제외 )
- 2. 인공지능 기술 서비스 ( 자연어 )
     - 최종 목표
       - 방명록 내의 악성 댓글을 발견하는 서비스를 구현
     - 유저 시나리오
       - 1. 메인 미니홈피 UI 에서 방명록 버튼을 누르면 ( 또는 미니 홈피 방문 첫 페이지에 ) 방명록으로 이동
       - 2. 사용자는 방명록을 작성, 조회, 수정 및 삭제 가능
       - 3. 만약 방명록에 악성 콘텐츠 ( 악플 ) 이 작성되어 있다면, 이를 경고하는 표시를 해주어야 함
     - 구현 방안
       - 1. 악플과 관련 데이터를 수집 ( 크롤링 또는 API )
       - 2. 악플 관련 데이터를 학습시킴 ( 학습 모델은 어느 것이든 상관 없음 )
       - 3. 주기적으로 학습한 악플과 방명록 내용을 비교 후 판단하여 경고를 표시
     - 선택 사항
       - 1. 악성 댓글이 삭제되도록 구현
       - 2. 악성 댓글이 삭제되면 어느 시점에 사라지는지 ( 발견되는 즉시 사라지는지 아니면 다른 시점에서 사라지는지 ) 확인해줌.
            ( 서버는 2 개 이상도 가능 )
       - 3. 악성 댓글 찾는 알고리즘을 기존의 제공되는 API를 사용해도 되지만,
            만약 API 를 제작하면 node.js 혹은 python 으로 구현
            ( 필수는 아닙니다. 학습의 관점에서 이해하시고 구현하시면 될 것 같습니다. )

### 구현사항

- 기존 서비스 기능 [Frontend](https://github.com/wooojini/relay_15/tree/master/front-end) / [Backend](https://github.com/wooojini/relay_15/blob/master/back-end/README.md)
- 방명록 댓글 필터링 기능 [AI(자연어처리)](https://github.com/wooojini/relay_15/blob/master/ai/README.md)

### 전체 서비스 구조

![Img](https://github.com/wooojini/relay_15/blob/master/img/service.jpeg?raw=true)

### 로그인 / 회원가입

![Img](https://github.com/wooojini/relay_15/blob/master/img/login_signup.png?raw=true)

### 방명록 댓글 필터링 과정

![Img](https://github.com/wooojini/relay_15/blob/master/img/filtering_.jpeg?raw=true)

### 구현화면

- 메인페이지
  ![Img](https://github.com/wooojini/relay_15/blob/master/img/main_page.PNG?raw=true)

- 마이페이지
  ![Img](https://github.com/wooojini/relay_15/blob/master/img/mypage_1.PNG?raw=true)
  ![Img](https://github.com/wooojini/relay_15/blob/master/img/mypage_3.PNG?raw=true)

  - 방명록 작성
    ![Img](https://github.com/wooojini/relay_15/blob/master/img/mypage_4.PNG?raw=true)
    ![Img](https://github.com/wooojini/relay_15/blob/master/img/mypage_5.PNG?raw=true)

  - 필터링 과정
    ![Img](https://github.com/wooojini/relay_15/blob/master/img/mypage_6.PNG?raw=true)
    ![Img](https://github.com/wooojini/relay_15/blob/master/img/mypage_7.PNG?raw=true)

  - 로그아웃
    ![Img](https://github.com/wooojini/relay_15/blob/master/img/mypage_1.PNG?raw=true)
    ![Img](https://github.com/wooojini/relay_15/blob/master/img/mypage_logout.PNG?raw=true)

- 회원가입 페이지
  ![Img](https://github.com/wooojini/relay_15/blob/master/img/signup_page.PNG?raw=true)
  ![Img](https://github.com/wooojini/relay_15/blob/master/img/signup_page_2.PNG?raw=true)

* 참여자 리스트

  |        |        |        |        |
  | :----: | :----: | :----: | :----: |
  | 전경윤 | 한종호 | 신승현 | 김도호 |
  | 문건우 | 신우진 | 홍태하 | 문석암 |
  | 이석재 | 김도연 |

## 3rd week

### **3.2. 세 번째 주차 요구 사항**

- 기존 서비스 기능미니 홈피 기능 중 게시판 게시물 작성, 조회, 수정 및 삭제게시판 게시물 콘텐츠에 이미지 업로드게시판 게시물 댓글
- 인공지능 기술 서비스 ( 비전 / 영상 처리 )최종 목표게시판 게시물 콘텐츠에 업로드 되는 이미지를 활용하여 게시물 추천 서비스를 구현유저 시나리오특정 게시물에 이미지가 첨부되어있을 때, 해당 게시물 하단에 그와 유사한 게시물을 추천구현 방안 ( 택 1 )핀터레스트와 유사하게 게시판에 존재하는 모든 이미지들 간의 유사도를 측정하고, 이를 기반으로 추천 ( 유사도 측정 모델은 자유롭게 선택해서 적용 ) 사진이 업로드 될 때 마다, 이미지 태그 생성 선택 사항이미지 thumbnail 추출사용자가 입력한 이미지의 thumbnail 을 추출해서 게시판 이미지들의 미리보기 형식을 지원이미지 변환 기술을 사용해서 사용자가 등록한 이미지 썸네일을 추출하여 게시물 목록 및 게시물 추천 컨텐츠에 활용

### 구현사항

- 기존 서비스 기능 Frontend / Backend

### 역할 배분

- 프론트

  조찬영, 임한동, 이소정, 전병재, 송진현, 구승효

- 백 :

  강동훈, 지화영, 김남진, 우승윤, 진영기, 류남광

### DB API 문서

[Week3-Relay15](https://docs.google.com/spreadsheets/d/15Ye5YN6SzAOdF8uzjuVc3KFLg3-Tn4WTtu22hIsSD9s/edit?usp=drive_web&ouid=100439240209536106378)

### 실행 화면

- 게시판 화면

![1](https://user-images.githubusercontent.com/49899406/90241318-c5cf9400-de65-11ea-878e-61912639c10f.png)

화면 우측 중간에 있는 게시판 탭을 클릭하면 다음과 같은 게시판 목록이 나온다.

원래 상태로 표시하는 것이 아닌 리액트 라우터로 화면을 이동하려 했으나 라우터 에러로 인해 부득이하게 상태로 게시글 목록을 표시했음

- 게시판 이미지 업로드

![2](https://user-images.githubusercontent.com/49899406/90241323-c6682a80-de65-11ea-95b2-46cdb7c47646.png)

'게시글 작성' 버튼을 누르면 제목과 사진을 선택할 수 있는 창 표시

- 게시판 상세보기

![3](https://user-images.githubusercontent.com/49899406/90241325-c7995780-de65-11ea-8b7a-d2514378bc4c.png)

게시글의 이미지와 게시글 하단에는 게시글 이미지와 연관성이 있는 추천 게시글 목록을 표시

![image](https://user-images.githubusercontent.com/49899406/90241574-4bebda80-de66-11ea-8e55-22a6b05274f7.png)

## 4th week
