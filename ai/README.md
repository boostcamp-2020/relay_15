# 목차
**[악성 글 분류 모델 using Naive Bayes Classifier](#모델-01.)**

**[악성 글 분류 모델 Using KoBert](#모델-02.)**

## 작성 맴버
J030 김도호, J068문석암, J104 신우진, J142 이석재,  J217 한종오 


# 모델 01.
# 악성 글 분류 모델 using Naive Bayes Classifier





### 2020.08.09.

### J030, J068, J104, J142, J217

## 요약

Naive Bayes Model을 이용한 악성 글 이진 분류 모델

  

## 동기

Naive Bayes를 이용한 스팸 메일 분석 실습을 했던 경험을 살려

한국어 글에도 적용할 수 있지 않을까라는 생각으로 접근

Bert를 이용한 딥러닝 모델과 같이 사용해 정확도를 높이려는 생각으로 시작

  

## 디자인

사용자가 글을 입력하면 입력한 글을 모델을 돌리고 있는 django server에 보내

악성 글인지(1) 아닌지(0) 이진 분류해 반환함

  

## 나이브 베이즈 모델

### 설명1

https://ratsgo.github.io/machine%20learning/2017/05/18/naive/

### 설명2

http://w3devlabs.net/wp/?p=17273

## 장점

- 단순하고 빠르며 매우 효과적이다.

- 노이즈와 결측 데이터가 있어도 잘 수행한다.

- 훈련에 대한 상대적으로 적은 예제가 필요하지만 매우 많은 예제도 잘 수행한다.

- 예측에 대한 추정된 확률을 얻기 쉽다.

## 단점

- 모든 속성은 동등하게 중요하고 독립적이라는 알려진 결함 가정에 의존한다.

- 수치 속성으로 구성된 많은 데이터셋에 대해 이상적이지 않다.

- 추정된 확률은 예측된 범주보다 덜 신뢰적이다.

  

## 구현 과정

### 데이터셋 확보 및 전처리

- 머신러닝의 대부분의 시간은 데이터 수집과 모델에 적합한 형태로 변환하는 전처리에 시간을 소비한다

- 데이터셋 수집

- https://github.com/sooyeon-go/grad_project/tree/master/comment_crawling

- labeling된 데이터 30199개

- https://github.com/2runo/Curse-detection-data

- txt 파일 형태로 된 데이터 4659 + 1163개

- 위 데이터를 사용

- 데이터셋 전처리 1

- python의 pandas 라이브러리를 이용해 ["content", "label"]의 2개의 feature를 가지는 형태로 csv파일 생성

- 모델에 입력하기 위한 최종 데이터셋 형태

-  ![image](https://user-images.githubusercontent.com/37795866/89732961-343edb80-da8d-11ea-8a51-30dcec9dca8e.png)

- feature에 숫자는 해당 형태소를 가진 단어가 출현한 빈도 수

- label의 숫자는 악성 글인지(1) 아닌지(0)

- feature를 잘 설정해주는 것이 매우 중요

- 처음에는 모든 문장을 공백 기준으로 토큰화 해서 자료구조에 넣고, 가장 빈도수가 많았던 토큰 10000개를 사용해 feature를 생성

- 예시

- "django 배우는 것 보다 장고 배우는게 훨씬 쉽겠다"

-  ["django","배우는","것","보다","장고","배우는게","훨씬","쉽겠다"]

- 이걸 feature로 사용하면 발생하는 문제점

-  1. 상대적으로 의미가 없는 조사, 접속사 또한 feature 목록에 들어간다

-  2. "달리고 달려서 달렸는데" 라는 문장의 경우, 실질적으로 "달리다" 만 3번 있는 건데 "달리고" 1번, "달려서" 1번 등 으로 데이터셋이 만들어짐

-  3. 형태소 분석 후 feature set을 정하는 것이 필요

- KoNLPy(한국어 자연어 처리 관련 모듈 라이브러리)의 Twitter API를 사용해 형태소 분석 후 dataset 만들기

- 예시

- "django 배우는 것 보다 장고 배우는게 훨씬 쉽겠다"

- [('django', 'Alpha'), ('배우다', 'Verb'), ('것', 'Noun'), ('보다', 'Verb'), ('장고', 'Noun'), ('배우다', 'Verb'), ('훨씬', 'Adverb'), ('쉬다', 'Verb')]

- 이 경우 "배우다", "훨씬", "쉬다" 등이 feature list에 적합하다고 할 수 있음

- 의미가 없는 형태소는 제거해주는 것이 좋다고 판단

- Determiner, Exclamation, Conjunction, Josa, Alpha, Emoi, Exclamation, Modifier, Number, Punctuation, Suffix, VerbPrefix

- 위 형태소는 조사 숫자, 동사 조어 등 큰 의미를 지니지 않고 있다고 판단해 제거

- 또 한국어 stop word list를 구글링을 통해 수집했고, stop word에 해당한다면 한번 더 제거

-  ![image](https://user-images.githubusercontent.com/37795866/89733327-b03a2300-da8f-11ea-92df-4ba214a8538c.png)

- 결과적으로 content(글 내용), label(악성 유무), 3301개의 형태소 feature로 구성된 dataset이 완성됨

### scikit-learn을 사용한 모델 선언 및 학습

- Python의 머신러닝 라이브러리 Scikit-learn에서 제공하는 Naive Bayes Model을 사용

- Gaussian, Bernoulli, Multinomial 의 3가지 나이브 베이즈 모델 중 정확도가 가장 높게 나왔던 Multinomial을 선택.

- Multinomial의 경우 단어 출현의 빈도수도 고려하기 때문에 준비한 데이터셋에 적합하다고 할 수 있음

- 학습 시 악성, 건전 데이터가 균일하게 들어가기 위해 데이터 비율을 맞춰준 뒤 학습

- 결과적으로 평균 정확도 약 86%의 이진 분류 모델을 생성 성공

-  ![image](https://user-images.githubusercontent.com/37795866/89733549-1e331a00-da91-11ea-8a1e-71bbe627159f.png)

  
  

### 모델 추출 후 django server 업로드

- 생성된 모델을 pickle을 사용해 .pkl 파일로 추출

- 추출된 파일과, 문자열을 모델에 적합한 형태로 변환하는 코드를 작성

- 서버로 부터 입력된 문자열을 모델이 판단해 이진 분류 후 0과 1의 값을 리턴함

  

## 결과

- URI 적으면 될듯

- 아주 빠르게 값을 리턴하는 것을 확인

- latency 문제는 걱정 안해도 될 듯

  

## 삽질한 내용

- 데이터 전처리

- 가장 많은 시간이 걸렸음

- 유니코드 에러 문제 --> 매우 화남

- 영어와 다르게 한글은 인코딩 디코딩 형식에 매우 민감한 것 같음

- 문제가 맞춰놔도 만들어진 csv에 수정을 가하거나, 대용량의 csv 결과물을 chunk단위로 나눌 때 인코딩 디코딩 형식이 바뀌는지 깨지는 현상이 발생

- 가장 많은 시간 소요

- 형태소 적용

- 초기 형태소 미 적용시에는 약 80%

- 형태소 적용후 정확도 약 86%

- 현재 상용 서비스하는 악성 댓글 필터 정확도가 90%를 가볍게 넘기는 것과 비교해 아쉬움

- NLP에 대해 좀더 도메인 지식이 있고, 딥러닝을 사용할 수 있었다면 더 좋은 결과가 나오지않았을까 하는 아쉬움이 있음( 후에 Bert 설명 )

- 또 형태소를 이용한 feature selection을 했으나 이것도 2차적으로 정제한다면 더 높은 정확도를 기대할 수 있을 것 같다.

- NLP에 CNN을 적용한 경우 등 인공지능 분야는 도메인 지식이 정말 중요하다는 것을 느낄 수 있었다.

# 모델 02.

# 악성 글 분류 모델 Using KoBert

2020.08.09

# 요약
KoBert를 이용한 악성 댓글 Binary Classification 모델

# 동기
Bert에 기반한 KoBert를 사용하여 Bert에 높은 성능을 사용해보고자 진행

# 설계
Pre-Trained  된 KoBert를 사용해서 저희 데이터로 Binary Classification 모델을 Fine-tuning 하여 진행 Classifier 는 하나의 hidden layer과 bias가 없는 완전 연결된 ReLU 신경망을, Euclidean distance 제곱을 최고화하는 식으로 x로부터 y를 예측하도록 학습합니다.



# 사용된 모델
SKT Brain KoBert모델 사용
[https://github.com/SKTBrain/KoBERT](https://github.com/SKTBrain/KoBERT)
( 한국어 모델이 없음에 따라 한국어 관련 성능을 증가하기위해 만들어진 모델)
데이터는 한국어 위키 내용 + 한국어 뉴스 내용을 더함
문장이 약 25M

**요구사항**
-   Python >= 3.6
-   PyTorch >= 1.1.0
-   MXNet >= 1.4.0
-   gluonnlp >= 0.6.0
-   sentencepiece >= 0.1.6
-   onnxruntime >= 0.3.0
-   transformers >= 2.1.1

# 테스트 환경
Google Colab [https://colab.research.google.com/notebooks/intro.ipynb#recent=true](https://colab.research.google.com/notebooks/intro.ipynb#recent=true)

# 데이터 셋
직접 크롤링한 데이터 + GitHub [https://github.com/2runo/Curse-detection-data](https://github.com/2runo/Curse-detection-data)에서 가져온 데이터 사용

**전처리 과정**
- TSVD 파일 구조로 변경
- Label 은 0과 1로 분류하여 1은 욕설로 판단
데이터 예시
![image](https://user-images.githubusercontent.com/33455696/89735145-6ce5b180-da9b-11ea-8b3b-ba3c26baaafe.png)


```35498	하 오랜만에 국뽕이 차오른다!!!	0```

# 트레이닝 및 테스트 진행 결과

#### 1차 테스트
GitHub에서 가져온 약 5000개의 데이터를 80:20으로 분류하여 Training 과 Testing 진행

 - 결과
Accuracy 약 86% 


#### 2차 테스트
1차 테스트 데이터  + 크롤링한 데이터 추가 한 모델

- 결과
Accuracy 약 51%

# 문제점
####  데이터 문제
2차 테스트 결과 Accuracy에 대한 문제가 있다 우선 크롤링한데이터에 필터링 될 데이터의 수와 그렇지 않은 데이터의 수를 50:50으로 맞추지 못했던걸로 예측 및 데이터의 질이 낮을 것임을 예측 더하여 Binary Classification 모델을 적절하지 못한 사용을 한 것으로 예측.

#### 서버환경 맞추는 것에 대한 문제
추가적으로 모델 학습에는 CUDA 를 이용하였으나 모델을 CPU로 바꾸는데 문제가 존재하였음 더하여 이를 적용시키는 문제가 존재.
