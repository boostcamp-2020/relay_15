# Django 사용 방법

>  2주차 AI 서버는 Django로 이루어져있으며 AWS 서버로 배포를 해 진행한 상태입니다.  하지만 Github 저장소에 퍼미션을 올릴 수도 없어 로컬에서 사용하는 방법에 대해 소개드리려 합니다.

- 가상머신 설치

  ``` python -m venv myvenv```

  ```python3 -m venv myvenv```

- 가상머신 실행

  ``` source myvenv/Scripts/activate ```

  ``` source myvenv/bin/activate```

- requirements.txt에 있는 파일 설치

  ``` pip install -r requirements.txt```

- django 로컬 서버 실행 (manage.py가 있는 폴더로 이동)

  ``` python manage.py runserver```

  ```python3 manage.py runserver```

- url

  | url                     | 설명                                                         |
  | ----------------------- | ------------------------------------------------------------ |
  | localhost:8000/predict  | 3,000개의 학습 데이터가 있는 API입니다.<br />POST 요청을 통해 사용됩니다. |
  | localhost:8000/predict2 | 30,000개의 학습 데이터가 있는 API입니다.<br />POST 요청을 통해 사용됩니다. |

- kobert 모델을 window에 설치를 하려 했으나 다운로드 속도가 오래 걸려 하지는 못했습니다. 하지만 주석을 풀고 해당 오류들을 해결한다면 가능할 것 같네요.

- 또한 백엔드 노드 서버에서 로컬 8000번과 통신하는 API 주소를 localhost로 바꿔야 합니다.
- 혹시 이해가 안가신다면 문의는 **J030 김도호**로 주셔도 됩니다. :fire: