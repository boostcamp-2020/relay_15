# 라떼 챌린지 relay 15 기획서

## 1. 개요

### 1.1. 선택한 서비스 - 싸이월드

![Cyworld](https://user-images.githubusercontent.com/34153657/89119846-4a2c2980-d4ec-11ea-8eac-bc3f954efdb8.jpg)

> 싸이월드(CyWORLD)는 대한민국의 소셜 네트워크 서비스이다. 흔히 싸이라고 줄여 말하기도 하는데, 이는 사이버(cyber)를 뜻하지만 "사이", 곧 "관계"를 뜻하기도 한다. 또, 미국의 페이스북, 마이스페이스와 영국의 베보와 같은 개인 가상 공간으로, 싸이월드 서비스에 포함된 '미니홈피'는 이미 고유명사가 되어 사용될 정도로 영향력을 가지게 되었다. 2007년 10월 19일, 전 세계에 타전되는 미국의 뉴스전문방송 CNN은 싸이월드를 한국의 앞서가는 IT문화 중 하나로 소개하기도 하였다. - [위키백과](https://ko.wikipedia.org/wiki/%EC%8B%B8%EC%9D%B4%EC%9B%94%EB%93%9C "위키백과")

### 1.2. 기존 서비스 구현 범위

- 회원 관련 서비스
  - 회원 가입
  - 로그인
  - 비밀번호 초기화
  - 회원 정보 변경
  - 회원 탈퇴
- 미니 홈피 서비스
  - 방명록
  - 개인별 게시판
    - 게시물 작성, 조회, 수정, 삭제
    - 사진 업로드
    - 댓글 기능

### 1.3. 인공지능 기술 활용 서비스

- 1. 자연어 처리 : 악성 콘텐츠 ( 악플 ) 경고 서비스
- 2. 비전 / 영상 처리 : 게시물 추천 서비스
- 3. 테이블 값 데이터 : 일촌 추천 서비스

## 2. 유저 시나리오 및 UI 기획

### 2.1. 유저 시나리오

  - 1. 회원가입
        - 회원 정보 입력 ( 이메일, 비밀번호, 비밀번호 확인, 닉네임 )
        - 임베딩 된 구글 폼으로 설문 조사 제출
  - 2. 비밀번호 초기화
        - 회원가입 된 이메일로 무작위로 초기화 된 비밀번호를 송신
  - 3. 로그인 하면 나의 미니 홈피 ( 방명록 ) 화면으로 이동
  - 4. 나의 미니 홈피에서 방명록 및 게시물, 게시물 댓글을 작성, 조회, 수정 및 삭제
  - 5. 일촌 목록에서 일촌 미니 홈피로 이동 또는 추천받은 일촌 등록
  - 6. 일촌 미니 홈피에서 게시물 조회 또는 방명록 및 게시물 댓글을 작성, 조회, 수정 및 삭제
  - 7. 회원 정보 변경을 통해 닉네임 및 비밀번호 변경 또는 회원 탈퇴 가능
  - 8. 로그아웃 하면 시작 페이지로 이동

> 기재된 유저 시나리오 외에 선택사항으로 더 많은 기능을 추가하셔도 좋습니다.
   Ex. 파도타기 ( 무작위로 다른 유저의 미니 홈피 방문 ),
         파도타기로 방문한 미니 홈피의 오너 유저를 일촌으로 등록하는 기능,
         게시물 추천 서비스로 방문한 미니 홈피의 오너 유저를 일촌으로 등록하는 기능 등

### 2.2. UI 기획

![relay-15-ui.001](https://raw.githubusercontent.com/boostcamp-2020/relay_15/master/relay-15-ui/relay-15-ui.001.jpeg)
![relay-15-ui.002](https://raw.githubusercontent.com/boostcamp-2020/relay_15/master/relay-15-ui/relay-15-ui.002.jpeg)
![relay-15-ui.003](https://raw.githubusercontent.com/boostcamp-2020/relay_15/master/relay-15-ui/relay-15-ui.003.jpeg)
![relay-15-ui.004](https://raw.githubusercontent.com/boostcamp-2020/relay_15/master/relay-15-ui/relay-15-ui.004.jpeg)
![relay-15-ui.005](https://raw.githubusercontent.com/boostcamp-2020/relay_15/master/relay-15-ui/relay-15-ui.005.jpeg)
![relay-15-ui.006](https://raw.githubusercontent.com/boostcamp-2020/relay_15/master/relay-15-ui/relay-15-ui.006.jpeg)
![relay-15-ui.007](https://raw.githubusercontent.com/boostcamp-2020/relay_15/master/relay-15-ui/relay-15-ui.007.jpeg)
![relay-15-ui.008](https://raw.githubusercontent.com/boostcamp-2020/relay_15/master/relay-15-ui/relay-15-ui.008.jpeg)
![relay-15-ui.009](https://raw.githubusercontent.com/boostcamp-2020/relay_15/master/relay-15-ui/relay-15-ui.009.jpeg)
![relay-15-ui.010](https://raw.githubusercontent.com/boostcamp-2020/relay_15/master/relay-15-ui/relay-15-ui.010.jpeg)
![relay-15-ui.011](https://raw.githubusercontent.com/boostcamp-2020/relay_15/master/relay-15-ui/relay-15-ui.011.jpeg)
![relay-15-ui.012](https://raw.githubusercontent.com/boostcamp-2020/relay_15/master/relay-15-ui/relay-15-ui.012.jpeg)

## 3. 주차 별 개발 미션

### 3.1. 두 번째 주차 개발 미션

  - 1. 기존 서비스 기능
        - 회원 가입 ( 구글 폼 임베딩 제외 ) 및 로그인
        - 회원 정보 변경 및 회원 탈퇴
        - 미니 홈피 기능 중 방명록 ( 게시판 제외 )
        - 일촌 목록 및 일촌 미니 홈피 방명록 이동 ( 일촌 추천 기능 제외 )
  - 2. 인공지능 기술 서비스 ( 자연어  )
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
  - 3. 참고 자료 및 개념
        - 네이버 기술블로그 ( 클린봇 ) : [https://d2.naver.com/helloworld/7753273](https://d2.naver.com/helloworld/7753273)
        - 한국 욕설 사전 리스트 : [http://statwith.com/한국의-욕설-사전-리스트](http://statwith.com/한국의-욕설-사전-리스트)
        - 한국어 성향 분석 서비스 : [http://www.cdnews.co.kr/blog/blogOpenView.html?idxno=347421](http://www.cdnews.co.kr/blog/blogOpenView.html?idxno=347421)
        - checkPoint
           - 자연어 처리 기법
           - 정형 데이터와 비정형 데이터의 차이점
           - 텍스트 마이닝
           - 토픽 모델링 : [https://ratsgo.github.io/from frequency to semantics/2017/06/01/LDA/](https://ratsgo.github.io/from%20frequency%20to%20semantics/2017/06/01/LDA/)
           - 한국어형태소분석 라이브러리
              -  konlpy  : 토큰화 라이브러리
              -  soynlp :  띄어쓰기 교정 라이브러리
           - 전처리 기법
           - 데이터 수집 방법
           - 단어임베딩 : [https://github.com/ratsgo/embedding](https://github.com/ratsgo/embedding)
        - 데이터 수집 방법
           - 웹 크롤링
              - 크롤링 이해 및 기본 : [https://www.fun-coding.org/crawl_basic2.html](https://www.fun-coding.org/crawl_basic2.html)
              - Open APi 크롤링 : [https://www.fun-coding.org/crawl_basic3.html](https://www.fun-coding.org/crawl_basic3.html)
              - 욕설 데이터 크롤링 참고 : [https://lsjsj92.tistory.com/476?category=792966](https://lsjsj92.tistory.com/476?category=792966)
           - Open API
              - 오픈 API를 통한 공공데이터 수집 : [https://medium.com/@whj2013123218](https://medium.com/@whj2013123218/%EC%98%A4%ED%94%88-api%EB%A5%BC-%ED%86%B5%ED%95%9C-%EA%B3%B5%EA%B3%B5%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%88%98%EC%A7%91-e1dd0ad203b6)
              - 공공데이터 포털 : [https://www.data.go.kr/](https://www.data.go.kr/)
           - 참고
              - 비속어필터 api : [https://github.com/hjh010501/appropriate-filetering](https://github.com/hjh010501/appropriate-filetering)
              - 악성댓글 데이터 : [https://github.com/sooyeon-go/grad_project/tree/master/comment_crawling](https://github.com/sooyeon-go/grad_project/tree/master/comment_crawling)

### 3.2. 세 번째 주차 개발 미션

  - 1. 기존 서비스 기능
        - 미니 홈피 기능 중 게시판 게시물 작성, 조회, 수정 및 삭제
        - 게시판 게시물 콘텐츠에 이미지 업로드
        - 게시판 게시물 댓글
  - 2. 인공지능 기술 서비스 ( 비전 / 영상 처리 )
        - 최종 목표
           - 게시판 게시물 콘텐츠에 업로드 되는 이미지를 활용하여 게시물 추천 서비스를 구현
        - 유저 시나리오
           - 특정 게시물에 이미지가 첨부되어있을 때, 해당 게시물 하단에 그와 유사한 게시물을 추천
        - 구현 방안 ( 택 1 )
           - 1. 핀터레스트와 유사하게 게시판에 존재하는 모든 이미지들 간의 유사도를 측정하고, 이를 기반으로 추천
                 ( 유사도 측정 모델은 자유롭게 선택해서 적용 )
                  ![aaa](https://user-images.githubusercontent.com/34153657/89122259-d0526b00-d500-11ea-901b-ef5bfe0de4dc.jpg)
           - 2. 사진이 업로드 될 때 마다, 이미지 태그 생성
                  ![Untitled](https://user-images.githubusercontent.com/34153657/89122281-0263cd00-d501-11ea-9db5-3982a45719ca.png)
        - 선택 사항
           - 이미지 thumbnail 추출
              - 사용자가 입력한 이미지의 thumbnail 을 추출해서 게시판 이미지들의 미리보기 형식을 지원
              - 이미지 변환 기술을 사용해서 사용자가 등록한 이미지 썸네일을 추출하여 게시물 목록 및 게시물 추천 컨텐츠에 활용 
  - 3. 참고 자료 및 개념
        - Node.js & OpenCV 연동 및 두 이미지 사이의 유사도 측정 : [https://victorydntmd.tistory.com/43](https://victorydntmd.tistory.com/43)
        - 구글 라벨링 API ( Vision API ) : [https://cloud.google.com/vision/docs?hl=ko](https://cloud.google.com/vision/docs?hl=ko)
        - Kakao Vision AI : [https://vision-api.kakao.com/#face](https://vision-api.kakao.com/#face)

### 3.3. 네 번째 주차 개발 미션

  - 1. 기존 서비스 기능
        - 회원 가입 중 구글 폼 생성하여 임베딩 및 구글 폼 서버 연계 ( 앱스 스크립트 )
        - 비밀번호 초기화 ( 무작위 비밀번호를 이메일로 송신 구현 )
        - 미니 홈피 프로필 영역 ( 설문 내용을 활용하여 콘텐츠 개발 )
  - 2. 인공지능 기술 서비스 ( 테이블 값 데이터 )
        - 최종 목표
           - 사용자 정보 ( 나이, 사는 곳, 관심 분야 등) 을 통해 일촌을 추천하는 서비스를 구현
        - 유저 시나리오
           - 1. 일촌 목록에서 일촌 추천 받기 버튼을 클릭
           - 2. 추천 일촌 목록이 모달 / 팝업으로 주어지고, 사용자는 추천 유저 중 한 명을 클릭
           - 3. 유저가 클릭한 회원의 미니홈피를 방문
        - 구현 방안
           - 1. 회원 가입 시 입력 받은 데이터 ( + 현재 회원들간의 일촌 데이터 ( 선택 ) ) 을 사용
                 회원가입시 입력받은 데이터  :
                 - 나이
                 - 사는 곳
                 - 취향
                    - 1. 내향 / 외향
                    - 2. 아침형 / 야행형
                    - 3. 선호하는 음식 ( 한식, 중식, 양식, 일식, 기타 )
                    - 4. 좋아하는 영화 장르 ( 액션, sf, 로맨스, 공포 / 스릴러, 판타지, 기타 )
           - 2. 각 유저 별 관심 분야를 바탕으로 모델을 학습
                 - 더미 데이터 생성 ( dummy data 를 넣어 학습시킨다. )
                 - 모델링을 하는 방식은 자유
                    - 1. 비슷한 관심 분야를 가진 유저 끼리 군집화 해서 같은 군집의 유저 추천
                    - 2. 비슷한 관심 분야를 가진 유저가 맺은 모든 일촌의 데이터를 학습시켜 유저 추천
           - 3. 일촌 추천받기 버튼 클릭 시, 학습시킨 모델에 사용자 정보를 넣어 추천할 유저 목록을 생성
  - 3. 참고 자료 및 개념
        - 군집화 알고리즘 예시 : [https://ko.wikipedia.org/wiki/K-%ED%8F%89%EA%B7%A0_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98#:~:text=k%2D%ED%8F%89%EA%B7%A0%20%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98](https://ko.wikipedia.org/wiki/K-%ED%8F%89%EA%B7%A0_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98#:~:text=k%2D%ED%8F%89%EA%B7%A0%20%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98)
        - 파이썬으로 백엔드를 구축했다면 파이썬의 sklearn package 참고 : [https://scikit-learn.org/stable/modules/generated/sklearn.cluster.KMeans.html](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.KMeans.html)

