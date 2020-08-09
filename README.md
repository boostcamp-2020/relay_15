# relay_15

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

### 실행화면

- 메인페이지
  ![Img](https://github.com/wooojini/relay_15/blob/master/img/filtering_.jpeg?raw=true)

- 마이페이지
  ![Img](https://github.com/wooojini/relay_15/blob/master/img/filtering_.jpeg?raw=true)

- 회원가입
  ![Img](https://github.com/wooojini/relay_15/blob/master/img/filtering_.jpeg?raw=true)

* 참여자 리스트

  |        |        |        |        |
  | :----: | :----: | :----: | :----: |
  | 전경윤 | 한종호 | 신승현 | 김도호 |
  | 문건우 | 신우진 | 홍태하 | 문석암 |
  | 이석재 | 김도연 |

## 3rd week

## 4th week
