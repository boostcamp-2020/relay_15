
# tagging(kakao vision api mulit tag)

[참고 자료](https://developers.kakao.com/docs/latest/ko/vision/dev-guide#create-multi-tag)

> 요구 사항

- python

- npm install python-shell

- node.js

- kakao developer 키 발급(REST API KEY)



> compute.py

```jsx
import sys, json, numpy as np
import argparse
import requests
from PIL import Image, ImageDraw, ImageFont
from io import BytesIO
###############
API_URL = 'https://kapi.kakao.com/v1/vision/multitag/generate'
MYAPP_KEY = '{개인 REST API KEY}'

def generate_tag(image_url):
    headers = {'Authorization': 'KakaoAK {}'.format(MYAPP_KEY)}
    #print(headers)
    try:
        data = { 'image_url' : image_url}
        resp = requests.post(API_URL, headers=headers, data=data)
        # print(resp)
        resp.raise_for_status()
        result = resp.json()['result']
        if len(result['label']) > 0:
            print(result['label'])
        else:
            print("tag fail")

    except Exception as e:
        print(str(e))
        sys.exit(0)
###############
#Read data from stdin

generate_tag(sys.argv[1])
```



> compute.py 설명

- test.js로부터 넘어오는 값(image_url)을 받아서 generate_tag() 함수에 넘김
- image_url과 개인 KET  를 카카오 비전 멀티 태깅 API URL로 POST 요청
- 요청을 통해 받아온 resp의 result에서 결과를 받음
- result의 label 프로퍼티에서 영문으로 태깅된 결과를 뽑음 
- 태그된 결과가 있으면 출력해서 tagging.js로 넘겨줌



> tagging.js

```jsx
const dbHelper = require('../public/database/dbHelper');
const pythonShell = require('python-shell').PythonShell;

function tagging(link) {
  return new Promise(async (resolve, reject) => {
    const options = {
      mode: 'text',
      pythonOptions: ['-u'],
      scriptPath: './imageProcessing',
      args: [link],
    };
    pythonShell.run('compute.py', options, (err, results) => {
      resolve(results);
    });
  });
}
module.exports = tagging;
```



> image_process.js 설명

- pythonReader에 파이썬 코드인 compute.py와 태깅을 희망하는 image의 url을 입력.
- python-shell을 이용해 compute.py에 입력한 url을 전달
- pythonShell.run의 results(객체)를 통해 입력한 image의 태깅된 결과(results)를 프로미스로 반환 
- ex ) "['electronics', 'phone.tablet']"
